NodeJS + Express + bluebird + PostGRES<br><br>
RESTAPI to fetch Bank Branch Details by IFSC or Bank Name & City<br>
<br>
Example:<br>
http://localhost:3000/bank/search/byBankNameAndCity/HDFC%20BANK/MUMBAI<br>
http://localhost:3000/bank/search/byiFSC/HDFC0000001
<br><br>
Usage:<br>
http://localhost:3000/bank/search/byBankNameAndCity/{BankName}/{City}<br>
http://localhost:3000/bank/search/byIFSC/{IFSC}

<br>
Installation:<br>
1. Clone GIT<br>
2. npm start
<br>
<br>
Requirements:<br>
PostGRES Server : Heroku free is being used in this example.
