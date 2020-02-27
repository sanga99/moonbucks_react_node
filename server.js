const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userApi = require('./api/userApi');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.user(cors()); // cors미들웨어 추가
app.use('/api', userApi);


app.listen(port , () => console.log(`port는 ${port}`));
