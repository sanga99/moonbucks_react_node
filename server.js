const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userApi = require('./api/userApi');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/api', userApi);
/*
cors이란 도메인 또는 포트가 다른 서버의 자원을 요청하면 발생하는 이슈이다.
서버와 클라이언트가 분리되어 있는 앱에서는 cross-origin HTTP 요청을 서버에서 승인해주는 것이 좋다.
*/ 
// app.use(cors()); // 모든 도메인에 접근 허용, cors미들웨어 추가

const corsOptions = {   // 3000포트에만 허용
    origin : 'http://localhost:3000',
    credentials: true,
};

app.listen(port , () => console.log(`port는 ${port}`));
