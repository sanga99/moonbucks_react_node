import {  call, put, takeEvery, delay } from 'redux-saga/effects';
// import { all, fork, call, put, delay, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from "../../actions/user.action";

/*
로직 설명 
비동기 처리 로직
userSaga가 all을 이용해 watchLogin을 등록하고 
-> watchLogin이 takeEvery를 이용해 action을 dispatch한다. 
-> LOGIN_REQUEST 액션이 dispatch되면, 인자로 준 login함수가 실행되고,
-> login은 payload를 통해 액션을 dispatch 할 때 parameter를 받는다. 
-> 그 후 delay이를 준다 
    (원래는 call을 이용해 loginApi를 비동기로부르는 부분을 간이적으로 구현한것.)
-> 다음 성공/실패 여부에 따라 액션을 dispatch 해준다. 

*/


// function signUpApi(signUpData){
//     return axios.post('/signup', signUpdata);
// }

// function* signUp({payload}){
//     try {
//         const { signUpData } = payload;
//         console.log('여기는 userSaga의 signUp data는'+signUpData);
//         yield call(signUpApi, singUpData);
//         // yield delay(2000);
//         yield put({
//             type : actions.SIGNUP_SUCCESS,
//         });
//     }catch(err){
//         console.error('signUp errer'+ err);
//         yield put({
//             type : actions.SIGNUP_SUCCESS,
//             err,
//         });
//     }
// }


export function* watchSignUp(){
    yield takeEvery(actions.SIGNUP_REQUEST, signUp);
}


/*
 takeEvery를 이용해 action을 dispatch한다.
 인자로 준 함수(login)을 실행하고, 
 함수에서 인자로준 payload를 parameter를 받는다.
*/
export function* watchLogin(){
    yield takeEvery(actions.LOGIN_REQUEST, login);  
    yield takeEvery(actions.LOGOUT_REQUEST, logout);
}

// export default function* userSaga(){
//     yield all([
//        fork(watchLogin),
//        fork(watchSignUp), 
//     ]);
// }





/* 

* 로그인은 passport로 구현
// api/login에서 데이터를 불러온다 불러온 data는 .then()의 res에 답아서 처리한다.
function loginApi( loginData){  
    
    return axios.post('/api/login', loginData, {     
        withCredentials: true, // 쿠키를 교환하겠다.의미. 
        // 프론트랑 백의 주소가 다른경우 쿠키 전달을 위해 ajax요청 시 withCredentials 주어야한다. 
    })
    // .then(res => {console.log(res.data) })
}
        
        withCredentials 때문에 
        서버는 세션/쿠키를 확인하기 위해 passport에서 deserializeUser를 확인한다.
        (쿠키가 없으면 그냥 패스!)
        거기서 서버에 저장했녕 세션 아이디를 가지고 디비에 접근해 유저를 찾아낸다.
        만약 없으면, express router에 req.user가 undefined로 나오는데 이에 따라 맞는 조치를 취해주면 된다.
        인증이 없ㄷ어도 무관하면 그냥 패스, 인증이 필요하면 에러 메시지를 클라이언트에 보내주어야 한다.
        
        즉, 로그인 완료가 되면 그에 맞는 세션/쿠키를 만들고(serializeUser)
            -> 이를 클라이언트단으로 보내고 -> 추후 클라이언트 단에서 인증이 필요한 요청이 오면 쿠키와 함께 요청이 오게 된다.
        


//  함수에서 인자로준 payload를 통해 액션을 dispatch할 때  parameter를 받는다.
function* login( {payload} ) {      // 입력받은   payload : {loginData = {userId, password} }
    try {
        
        const  { loginData } = payload;
        console.log('logindata-saga', loginData);
        // const { data } = yield call(loginApi, loginData);
        yield delay(2000);  // 단지, 다음을 2초 뒤 실행
        yield put({             // put은 redux sotre에 dispatch하는 역할
            type : actions.LOGIN_SUCCESS,
            // payload : {
            //      data,
            // },
        });
    }catch(err){
        console.error('login error'+err.response);   // saga지만 서버부분(api)에서 에러나는 것임. 로그인 실패
        yield put({
            type : actions.LOGIN_FAILURE,
            err,
        });
    }
}

function logoutApi(){
    return axios.post('/api/logout', {},{
        withCredentials : true,
    });
}

function* logout(){
    try{
        yield call(logoutApi);
        // yield delay(2000);
        yield put({
            type : actions.LOGOUT_SUCCESS,
        });    
    } catch(err){
        console.error('logout error'+ err);
        yield put({
           type : actions.LOGOUT_FAILURE,
           err,    
        });
    }
}



export function* watchLogin(){
    yield takeEvery(actions.LOGIN_REQUEST, login);  
    yield takeEvery(actions.LOGOUT_REQUEST, logout);
}

*/
