const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');



//[admin]
router.post('/storeAll', (req, res) => {
  dbConn((err, connection) => {
      connection.query("SELECT * FROM store", (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        console.log('ㅇㅇㅇ'+ rows ); 
        return res.send( rows ); 
      });
      if(err) throw err;
    });
})

module.exports = router;