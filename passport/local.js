const passport = require('passport');
const { Strategy : LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const dbConn = require('../mariaDBConn');

/*
디비 확인하고 유저 정보 없으면 에러, 비밀번호 안맞으면 에러,
다 무사히 통과하면 user를 넘겨준다.
이렇게 로그인 에러없이 로그인이 완료되면 
passport/index.js 에 seriralizeUser에서 
세션/쿠키를 만들어주고 + 알아서 쿠키를 클라이언트로 응답과 함께! 보낸다. 
클라이언트로 보내는 유저 정보에는 유저가 쓴 글들이나 정보가 있다면 그 data도 만들어주고, 
유저 패스워드도 같이 보내면 안되기 때문에 몇가지 작업을 한 뒤,
res.json(fullUser[0])를 통해 응답을 보낸다. 
-> 그러면 클라이언트에서는 자동으로 쿠키가 생기고, 
이제 인증이 필요한 요청은 쿠키와 함께 서버에 요청을 하게 된다. 

*/
/*
    userIdField, PasswordFiedl의 값(압력한 id,pw / html의 name속성 값과 같아야한다!)
    을 db값과 비교해서 인증 진행
    -> 인증 실패 : done(false, null)
    -> 인증 성공 : done(null, 유저 정보 객체)를 serializeUser을 넘김

결국, 인증처리, db로직, post들어오면 체크 모두 여기서 한다.
*/
module.exports = () => {
    passport.use(new LocalStrategy({
        userIdField : 'userId',     // login.html의 name값이랑 동일해야 한다!
        passwordField : 'password'    // 이 값으로 DB의 값과 비교해서 인증 절차를 진행한다. 
    }, async (userId, password, done) => { 
        console.log('this local.js req는'+ req);    
        console.log('this local.js req는'+ req.user);    
        console.log('this local.js res는'+ res);    
        try{
            // db와 매칭
        //     dbConn((err, connection) => {
        //     connection.query("SELECT * FROM owner", (err, rows) => {
        //     connection.release(); // 연결세션 반환.
        //     if (err) {
        //       throw err;
        //     }
        //     return res.json( rows ); // 결과는 rows에 담아 전송
        //   });
        //   if(err) throw err;
        // });
        const dbuser = {
            id : 'aaaa',
            pw : 'bbbb'
        }
        if(userId === dbuser.id && password === dbuser.pw){ 
            console.log('this local localStrategy에서 id, pw 조회성공')
            done(null, dbuser)      // -> userApi의 req.login 코드로 이동한다.
        }   
            // if(userId === 'aaaa' && password === 'bbbb'){   // 어케 가져오지?
            //     return done(null, user[0])  // req.user
            // }
            // const user = await UseModel.findOne({
            //     userId,
            // });
            if(!user){
                return done(null, false, {reason: '회원이 아닙니다.'});
            }
            const result = await bcrypt.compare(password, user.password);
            if(result) {
                return done(null, user);
            }
            return done(null, false, { reason: '비밀번호를 틀렸습니다.'});
        }catch(err){
            console.error(err);
            return done(err);
        }
    }));
};

/*
콜백함수, done(에러, 성공, 사용자정의 메시지)
- done함수는 3가지의 인자를 가진다.
*/