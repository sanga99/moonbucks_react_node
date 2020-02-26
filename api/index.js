const app = require('express');
const user = require('./user');

app.use('/', user);
