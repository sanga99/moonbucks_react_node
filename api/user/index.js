const app = require('express');
const userRouter = require('./userApi');

app.use('/', userRouter);
