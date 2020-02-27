// reducer을 먼저 만들고 store에 연결해준다
// store안에 reducer가 들어간다.
import * as actions from '../actions/user.action';



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


// reducer와 saga는 각기 움직인다.
// 같은 action을 두곳에서 모두 dispatch하면, 둘다에서 잡힌다.
const userReducer = (state= InitialState, action) => {
    const { type, paylod, error } = action;
    switch(type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,     // 반드시 새로운 객체를 반환해야 하므로! 기존 state를 복사한다.
                isLoggedIn : true,
                isLoggingIn : false,
                user : dbUser,
                // isLoading : false,
            };
        case actions.LOGIN_FAILURE:
            return { 
                ...state,
                isLoggedIn : false,
                isLoggingIn : false,
                logInErrorReason : 'error',
                user : null,
            };
        case actions.LOGIN_REQUEST : 
            return {
                ...state, 
                isLoggingIn :true,
                logInErrorReason : '',
            };
        case actions.LOGOUT_SUCCESS: 
            return {
                ...state,
                isLoggedIn : false,
                isLoggingOut : false,
                user : dbUser,
                // user : {},
            };
        case actions.LOGOUT_FAILURE: 
            return {
                ...state,
                isLoggingOut : false,
            };
        case actions.LOGOUT_REQUEST: 
            return {
                ...state,
                isLoggingOut : true,
            };
        case actions.SIGNUP_SUCCESS:
            return{
                ...state,
                isSignedUp : true,
                isSigningUp : false,
            };
        case actions.SIGNUP_FAILRUE:
            return {
                ...state,
                isSigningUp : false,
                signUpErrorReason : 'error',
            };
        case actions.SIGNUP_REQUEST:
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
// const reducer = combineReducers({
//     userReducer
// });


export default userReducer;