const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');



//[admin]-[Map infoWindow]
router.post('/storeAll', (req, res) => {
  dbConn((err, connection) => {
      connection.query("SELECT * FROM store", (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        return res.send( rows ); 
      });
      if(err) throw err;
    });
})


//[admin]-[Search side option]
router.post('/storesName', (req, res) => {
  dbConn((err, connection) => {
      connection.query("SELECT name FROM store", (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        return res.send( rows ); 
      });
      if(err) throw err;
    });
})



module.exports = router;