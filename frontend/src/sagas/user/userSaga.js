import { all, fork, call, put, delay, takeEvery } from 'redux-saga/effects';
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


// client쪽에서 (쿠키생성 + 입력data)를 server쪽으로 보낸다
function loginApi(loginData){
    return axios.post('/api/login', loginData,{
        withCredentials: true, // 쿠키를 교환하겠다.의미. 
                               // 즉, 인증이 필요한 요청이라는 말이다.
    });
}

/*
 함수에서 인자로준 payload를 통해 액션을 dispatch할 때  parameter를 받는다.

*/
function* login( {payload}) {
    try {
        const { loginData } = payload;
        console.log('여기는 userSaga의 loginData는'+loginData);
        // yield call(loginApi
        const { data } = yield call(loginApi, loginData);
        // yield delay(2000);  // 2초
        yield put({
            type : actions.LOGIN_SUCCESS,
            payload : {
                data,
            },
        });
    }catch(err){
        console.error('login error'+err);   // 로그인 실패
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


function signUpApi(){
    return axios.post('/signup');
}

function* signUp( {payload}){
    try {
        const { signUpData} = payload;
        console.log('여기는 userSaga의 signUp data는'+signUpData);
        yield call(signUpApi, singUpData);
        // yield delay(2000);
        yield put({
            type : actions.SIGNUP_SUCCESS,
        });
    }catch(err){
        console.error('signUp errer'+ err);
        yield put({
            type : actions.SIGNUP_SUCCESS,
            err,
        });
    }
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

export function* watchSignUp(){
    yield takeEvery(actions.SIGNUP_REQUEST, signUp);
}

// export default function* userSaga(){
//     yield all([
//        fork(watchLogin),
//        fork(watchSignUp), 
//     ]);
// }

