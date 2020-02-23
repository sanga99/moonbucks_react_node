const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');




  router.get("/", (req, res) => {
    // db select문 수행
    dbConn((err, connection) => {
      connection.query("SELECT * FROM test_user", (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        return res.json( rows ); // 결과는 rows에 담아 전송
      });
      if(err) throw err;
    });
  });
  




 module.exports = router;