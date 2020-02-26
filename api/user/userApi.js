const express = require('express');
const router = express.Router();
const dbConn = require('../mariaDBConn');

console.log('user router server ㅇㅕ기도착');



// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', (err, user, info)=> {
//       conseole.log(err, user, info)
//       if(err){
//         console.error(err);
//         return next(err);
//       }
//       if(info){
//         return res.status(401).send(info.reason);
//       }
//       return req.login(user, (loginErr) =>{
//         if(loginErr){       // 성공 시 passport에서 제공하는 req.login 함수를 실행해 
//           return next(loginErr);
//         }
//         const filteredUser = Object.assign({}, user.toJOSN());
//         delete filteredUser.password;
//         return res.json(filteredUser);  // 유저를 json으로 응답한다. 
//       });   
//     })(req, res, next);
//   });

  module.exports = router;