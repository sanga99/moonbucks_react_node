const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
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
// router.post('/login', (req, res) => {
//   console.log('server request는'+req);
//   return res.json( dbUserTest);
// });

/*
앞서 saga에서 withCredentials 가지고 왔기 때문에 passport에 deserializeUser 통과한다.
그러나 쿠키가 없기 때문에 별일 없이 통과는 하는데
req.user는 값이 없게 된다.
그 다음 req.login을 하게 되면 우리가 만들어 놓은 passport local 로그인 전략을 사용하게 된다. 
*/

router.post('/login', (req, res, next) => {   // saga에서 요청 들어옴 req는 loginData가 들어와야함.
  console.log('server request는'+req);
  console.log('server req.body는'+req.body);
  passport.authenticate('local', (error, user, info) => { // passport/local.js를 실행
    console.log('user는' + user);   // 여기서 local은 사용자의 아이디, 비밀번호를 사용해 로그인인증을 하는것을 의미한다. 
    console.log('info는' + info);   // 만약, kakao나 다른 서비스를 이용하여 로그인 인증을 하게 되면 local 대신 다른 값으로 바뀐다.
    if(err){
      return next(err);
    }
    if(info){
      return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginError) => {   // local db매칭 성공 시의 done에서 온다.
      try{      // req.login이 실행되면, serializeUser() 가 실행된다.(passport/index.js)
        if(loginError){
          return next(loginError);
        }
        // return res.json( dbUserTest);  // local에서 (done함수에서) 옳은 user값 가져올 듯.
        // const fullUser = await // DB랑 연결하는듯 => 위코드로 대체
        // // return res.json(dbUserTest);
      }catch(err){
        return next(err);
      }
    });
  })(req, res, next);
});

// router.post('/login', (req, res, next) => {
//   console.log('server request는'+req);
//   passport.authenticate('local', (error, user, info) => {
//     if(err){
//       return next(err);
//     }
//     if(info){
//       return res.status(401).send(info.reason);
//     }
//     return req.login(user, async(loginError) => {
//       try{
//         if(loginError){
//           return next(loginError);
//         }
//         dbConn((err, connection) => {
//           connection.query("SELECT * FROM owner", (err, rows) => {
//             connection.release(); // 연결세션 반환.
//             if (err) {
//               throw err;
//             }
//             return res.json( rows ); // 결과는 rows에 담아 전송
//           });
//           if(err) throw err;
//         });
//         // const fullUser = await // DB랑 연결하는듯 => 위코드로 대체
//         // // return res.json(dbUserTest);
//       }catch(err){
//         return next(err);
//       }
//     });
//   })(req, res, next);
// });



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


router.post('/logout', (req, res)=> { // post /api/logout
  req.logout();
  req.session.destroy();
  res.send('Logout');
  // res.redirect('/login');
})

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
