const express = require('express');
const bodyParser = require('body-parser');
// const router = require('./api');
const router = require('./api/user/userApi');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/', router);


app.listen(port , () => console.log(`port는 ${port}`));
