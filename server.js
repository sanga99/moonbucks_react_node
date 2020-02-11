const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('./mariaDBConn');
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));




dbConn.DBTest()
    .then((rows) => {
        console.log(rows);
    })
    .catch((err) => {
        console.log(err);
    });


// app.get('api/async', (req, res) => {
//     res.send([
//         'data' : 'data'
//     ]);
// });

app.listen(port , () => console.log(`port는 ${port}`));
