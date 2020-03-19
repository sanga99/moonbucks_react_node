const passport = require('passport');
     LocalStrategy  = require('passport-local').Strategy;
// const local = require('./local');
const bcrypt = require('bcrypt');
// const dbConn = require('../mariaDBConn');


    /*
    콜백함수, done(에러, 성공, 사용자정의 메시지)
    - done함수는 3가지의 인자를 가진다.
    */
    /*
    프론트에서 서버로는 cookie만 보낸다.(asdfgh)
    서버가 쿠키를 파서, 익스프레스세션으로 쿠키 검사 후 id : 3 발견
    id:3 이 deserializeUser에 들어간다
    (req 데이터!!) req.user로 사용자 정보가 들어간다.

    요청 보낼 때마다 deserializeuser가 실행된다( db 요청 1번씩 실행)
    실무에서는 deserializeUser 결과물 캐싱
    */
module.exports = () => {
    console.log('passport index진입-page로딩');

    const dbuser ={
        dbid : 'test@google.com',
        dbpw : 'test01#',
        name : '홍길동' 
    };

    
    // req.login 할 때 실행 (cookie, session에 저장)
    passport.serializeUser((user, done) => {        // Strategy 성공 시 호출됨
        console.log('passport/index serialize - session save'+ JSON.stringify(user));    // DB user
        done(null, user);                          // user.dbid req.session.passport.user에 저장
    }); 
    

    // deserializeUser은 항상 실행. user가 변경되면 바로 반영된다.
    passport.deserializeUser( async (id, done) => {  // 매개변수 id는 req.session.passport.user에 저장된 값
        try{
            console.log('deserialize password session get id', id);
            // db 접근시 await
            // - db 유저 conn
            done(null, dbuser); // req.user로 저장한다. 
        }catch(err){
            console.error(err);
            done(err);
        }
    });      


    /*
    디비 확인 ->  유저 정보 없으면 에러, 비밀번호 안맞으면 에러,
    다 통과 ->  user를 넘겨준다.
    이렇게 로그인 에러없이 로그인이 완료되면 
    seriralizeUser에서 세션/쿠키를 만들어주고 + 
    알아서 [쿠키 + 응답]을클라이언트로 보낸다. 
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

    passport.use('local', new LocalStrategy(
        {
            usernameField : 'userId',       // login.html의 name값이 (username, password가 아닐 경우, 여기서 명시 해준다.)
            passwordField : 'password',    
            passReqToCallback : true
        },
        (req, username, password, done)  => {
            console.log('indexuser확인'+JSON.stringify(req.body))     //{"userId":"입력id","password":"입력pw"}
          // DB 유저와 매칭 확인 
        if(username === dbuser.dbid){
            if(password === dbuser.dbpw){
            // if(bcrypt.compareSync(password,dbuser.dbpw)){        // 비밀번호 복호화
                return done(null, dbuser) ;     // -> userApi의 authenticate로 이동
            }else{  
                return done(null, false, {
                        message : '비밀번호가 맞지 않습니다.'
                });
            }
            }else{
                return done(null, false, {
                    message : '회원이 아닙니다.'
                });
            }
        
        }
    ));

    return passport;

}


