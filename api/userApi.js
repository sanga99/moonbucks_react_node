const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');

console.log('user router server ㅇㅕ기도착');

const dbUserTest = {
  stestId : 'aaaa',
  stestPw : 'bbbb'
};


/*
  body simple : {"userId" :"aaaa", "password" : "bbbb"}
  Error condes : 
    1: password is not string
    2: there is no user
    3: password is not correct
*/
router.post('/login', (req, res) => {
  console.log('server request는'+req);
  return res.json( dbUserTest);
});

router.post("/testLogin", (req, res) => {
    // db select문 수행
    dbConn((err, connection) => {
      connection.query("SELECT * FROM owner", (err, rows) => {
        connection.release(); // 연결세션 반환.
        if (err) {
          throw err;
        }
        return res.json( rows ); // 결과는 rows에 담아 전송
      });
      if(err) throw err;
    });
  });

// router.post('testLogin', (req, res) => {
//   if( typeof req.body.password !== "string"){
//     return res.status(401).json({
//       error : "비밀번호가 string값이 아닙니다.",
//       code : 1
//     });
//   }
//   dbConn((err, connection) => {
//         connection.query("SELECT * FROM owner", (err, rows) => {
//           connection.release(); // 연결세션 반환.
//           if (err) {
//                const errorConde = res.status(401).json({
//                   error : "해당 유저가 없습니다. ",
//                   conde : 2
//                });
//                console.log(errorConde);
//             throw err;
//           }
//            // 유저검색 결과가 있으면 검사 salt값으로 해쉬
//            const validate = hasher({password: req.body.password, salt: rows.salt}, function(err, pass, salt, hash){
//             // 입력한 비밀번호를 이용해 만드는 해쉬와, DB에 저장된 비밀번호가 같을 경우
//             if(hash === rews.password){
//               let session = req.session;
//               session.loginInfo = {
//                 _id : rows._id,
//                 username : rows.username
//               };
//             }
//            });
    
//           return res.json( rows ); // 결과는 rows에 담아 전송
//         });
        
//         if(err) throw err;
//       });
// }); 


// router.get("/owner", (req, res) => {
//   // db select문 수행
//   dbConn((err, connection) => {
//     connection.query("SELECT * FROM owner", (err, rows) => {
//       connection.release(); // 연결세션 반환.
//       if (err) {
//         throw err;
//       }
//       return res.json( rows ); // 결과는 rows에 담아 전송
//     });
//     if(err) throw err;
//   });
// });

module.exports = router;
