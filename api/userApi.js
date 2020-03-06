const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
      require('../passport/index')(passport);
const flash = require('connect-flash');
const dbConn = require('../mariaDBConn');

console.log('userApi.js진입');

const dbUserTest = {
  stestId : 'aaaa',
  stestPw : 'bbbb'
};






router.get('/ownerHome', (req, res) => {
  console.log('get/ req는'+req.user);

})


  // flash
  // router.get('/login', function(req, res){
  //   console.log('login실패시 flash')
  //   const msg ='';
  //   const errMsg = req.flash('error');
  //   if(errMsg){
  //     msg = errMsg;
  //   }
  //   res.render('login', {
  //     message : msg
  //   });
  // })

//   router.post('/login', 
//     passport.authenticate('local', {
//       successRedirct : req.sent('succ'),
//       failureRedirect: req.sent('fail')  // 3000번 포트
//       // failureFlash: true
//     }));

//     return router;
// }

/*
 위 코드 대신 커스텀 콜백을 사용(ajax라서 json응답을 줘야하기 때문에)

 authenticate('local',) 하면 => passport/local.js를 실행
 여기서 local은 사용자의 아이디, 비밀번호를 사용해 로그인인증을 하는것을 의미한다. 
 (만약, kakao나 다른 서비스를 이용하여 로그인 인증을 하게 되면 local 대신 다른 값으로 바뀐다.)
*/
router.post('/login', (req, res, next) => {   // saga에서 요청 들어옴 req는 loginData가 들어와야함.
  
  
  passport.authenticate('local', (err, user, info) => {  //   // local.js에서 db매칭 성공 시의 done에서 온다.
    console.log('WWW'+JSON.stringify(user));            // DB user
    if(err) { res.status(500).json(err); }
    if(!user) { console.log('userApi passport authenticate 유저없음');  
                return  res.status(401).json( { success : false, message : info.message } )
              }
       
    req.login(user, (err) => {                          // => serialize로 이동  
        console.log('req.login진입 - 입력user === dbuser와 매칭 맞은 상태')
        if(err) { 
            if(err) { return res.json({ Success : false, message : 'req.json 실패입니다.' }) }
            console.log('userApi req.login Error');
           
        }
        // return res.json(user);
    });
  })(req, res, next);   // authenticate 반환 메서드에 이 인자를 넣어서 처리해야한다. 
  console.log(JSON.stringify(req.session))
  res.redirect('/login');
});  



router.get('/logout', (req, res)=> { // post /api/logout
  req.logout();                       // 하면 로그아웃 되면 세션도 끊어준다. 
  req.session.destroy(function(err){   // 세션을 지우는 방법.
    res.redirect('/login');
  });
  // req.session.save(function(){  // 현재의 세션 상태를 저장하고, redirect
  //   res.redirect('/login');
  // })
});
     
               
/*
* 기본 형태
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
*/

module.exports = router;



/*
* saga + passport 이용 시 
saga에서 withCredentials처리 
앞서 saga에서 withCredentials 가지고 왔기 때문에 passport에 deserializeUser 통과한다.
그러나 쿠키가 없기 때문에 별일 없이 통과는 하는데
req.user는 값이 없게 된다.
그 다음 req.login을 하게 되면 우리가 만들어 놓은 passport local 로그인 전략을 사용하게 된다. 
*/