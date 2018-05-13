var express = require('express');
var router = express.Router();
var db = require('../queries');

//API URL
//URI can be changed according to the usage
router.get('/bank/search/byIFSC/:ifsc',db.getBranchByIFSC);
router.get('/bank/search/byBankNameAndCity/:BankName/:City',db.getBranchByNameAndCity);

module.exports = router;
