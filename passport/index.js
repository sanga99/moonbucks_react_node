const passport = require('passport');
const local = require('./local');

const dbConn = require('../mariaDBConn');

module.exports = () => {
    // req.login 할 때 실행, 서버쪽에 [{id: 3, cookie:'asdfgh}]
    passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
        console.log('serialize', user);
        return done(null, user.userId); // 여기의 user.userId가 req.session.passport.user에 저장
    });

    passport.deserializeUser(async (id, done) => {  // 매개변수 id는 req.session.passport.user에 저장된 값
        try{
            console.log('deserialize', id);
            // const user = await UserModel.aggregate([{
                // db 데이터를 변수에 넣는 작업인듯? // 다른참고 찾아보기 -> 다른 참고엔 작성안함
            return done(null, id); // req.user뽑아보기
        }catch(err){
            console.error(err);
            return done(err);
        }

    });

    local();
}

/*
프론트에서 서버로는 cookie만 보낸다.(asdfgh)
서버가 쿠키를 파서, 익스프레스세션으로 쿠키 검사 후 id : 3 발견
id:3 이 deserializeUser에 들어간다
(req 데이터!!) req.user로 사용자 정보가 들어간다.

요청 보낼 때마다 deserializeuser가 실행된다( db 요청 1번씩 실행)
실무에서는 deserializeUser 결과물 캐싱
*/