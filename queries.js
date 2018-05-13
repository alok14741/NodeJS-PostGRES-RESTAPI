var promise = require('bluebird');
var options = {
    promiseLib: promise
}
var pgp = require('pg-promise')(options);
//PostGRES Connection String. You can use array too
var connectString = 'postgres://gdbrpueallgnve:866bb216f01bb43cf58b5807a18ed101355e594fc38a899ac3914863348873a7@ec2-54-204-45-43.compute-1.amazonaws.com:5432/d784m89dknia0b?ssl=true';
var db = pgp(connectString);

//Function to connect DB.
//Fetch Details by IFSC
function getBranchByIFSC(req,res,next){
    db.any("SELECT branches.*, banks.name AS bank_name FROM (branches JOIN banks ON ((branches.bank_id = banks.id))) where branches.ifsc='"+req.params.ifsc+"'")
        .then(function(data){
            res.status(200)
            .json({ data });
        })
        .catch(function(err){
            return next(err);
        });
}

//Function to connect DB.
//Fetch Details by BankName & BankCity
function getBranchByNameAndCity(req,res,next){
    db.any("SELECT branches.*, banks.name AS bank_name FROM (branches JOIN banks ON ((branches.bank_id = banks.id))) where banks.name='"+req.params.BankName+"' and branches.city = '"+req.params.City+"'")
        .then(function(data){
            res.status(200)
            .json({data});
        })
        .catch(function(err){
            return next(err);
        });
}

module.exports = {
    getBranchByIFSC : getBranchByIFSC,
    getBranchByNameAndCity : getBranchByNameAndCity
};