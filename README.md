NodeJS + Express + bluebird + PostGRES
RESTAPI to fetch Bank Branch Details by IFSC or Bank Name & City

Example:
http://localhost:3000/bank/search/byBankNameAndCity/HDFC%20BANK/MUMBAI
http://localhost:3000/bank/search/byiFSC/HDFC0000001

Usage:
http://localhost:3000/bank/search/byBankNameAndCity/{BankName}/{City}
http://localhost:3000/bank/search/byIFSC/{IFSC}


Installation:
1. Clone GIT
2. npm start

Requirements:
PostGRES Server : Heroku free is being used in this example.
