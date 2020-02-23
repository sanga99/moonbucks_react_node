const express = require('express');
const bodyParser = require('body-parser');
//const dbConn = require('./mariaDBConn');
const router = require('./router/test_router');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/', router);



app.listen(port , () => console.log(`port는 ${port}`));
