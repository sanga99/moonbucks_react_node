// reducer을 먼저 만들고 store에 연결해준다
// store안에 reducer가 들어간다.

import * AS actions from '../actions/user.action';
import { combineReducers} from 'redux';
import { LOGIN_FAILURE, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILRUE, SIGNUP_REQUEST } from '../actions/user.action';
// combineReduers은 여러개의 reducer들을 하나로 합쳐준다.


// state초기값
const InitialState = {
    isLoggedIn : false,     // 로그인 여부(/로그아웃)
    isLoggingIn : false,    // 로그인 시도중
    isLoggingOut: false,    // 로그아웃 시도중
    logInErrorReason : '',  // 로그인 실패 사유

    isSignedUp : false,     // 회원가입 성공(/실패)
    isSigningUp : false,    // 회원가입 시도중
    signUpErrorReason : '', // 회원가입 실패 사유
    user : null,               // user정보
};  

const dbUser = {
    id : 'testId',
    password : 'testpw'
};

const userReducer = (state= loginInitialState, actions) => {
    switch(actions.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,     // 반드시 새로운 객체를 반환해야 하므로! 기존 state를 복사한다.
                isLoggedIn : true,
                isLoggingIn : false,
                user : dbUser,
                // isLoading : false,
            };
        case LOGIN_FAILURE:
            return { 
                ...state
                isLoggedIn : false,
                isLoggingIn : false,
                logInErrorReason : error,
                user : null,
            };
        case LOGIN_REQUEST : 
            return {
                ...state, 
                isLoggingIn :true,
                logInErrorReason : '',
            };
        case LOGOUT_SUCCESS: 
            return {
                ...state,
                isLoggedIn : false,
                isLoggingOut : false,
                user : {},
            };
        case LOGOUT_FAILURE: 
            return {
                ...state,
                isLoggingOut : false,
            };
        case LOGOUT_REQUEST: 
            return {
                ...state,
                isLoggingOut : true,
            };
        case SIGNUP_SUCCESS:
            return{
                ...state,
                isSignedUp : true,
                isSigningUp : false,
            };
        case SIGNUP_FAILRUE:
            return {
                ...state,
                isSigningUp : false,
                signUpErrorReason : error,
            };
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSigningUp : true,
                isSignedUp : false,
                signUpErrorReason : '',
            }
        default:
            return state;
    }
}
// combindReducer 사용
// const userReducer = combineReducers({
//     userReducer
// });


export default userReducer;