
// action type
export const LOGIN_REQUEST = 'LOGIN_REQUEST';  
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILRUE = 'SIGNUP_FAILURE'


// export const loginSubmit = (id, name) => {
//     return {
//         type : LOGIN_SUBMIT
//         // promise : { method : 'post', url : '/login', data : {id, password}}
//     };
// };
// 해당 login함수를 dispatch하면 -> store에 action이 전달된다.


// 로그인
export const loginRequestAction = data => ({    // RequestAction는 DB에 user가 제대로 들어왔는지 확인하는 역할(saga에서 확인한다.)
    type: LOGIN_REQUEST,
    payload : {
        loginData : data,
    },
});


// 로그아웃
export const logoutRequestAction = () => ({
    type : LOGOUT_REQUEST,
});

// 회원가입
export const signUpRequestAction = data => ({
    type : SIGNUP_REQUEST,
    payload : {
        signUpData : data,
    },
});

// export const loginSuccess = (user) => ({
//     type : LOGIN_SUCCESS,
//     user,
// });

// export const loginFailure = (error) => ({
//     type : LOGIN_FAILURE,
//     error,
// });

// export const logoutSuccess = () => ({
//     type : LOGOUT_SUCCESS,
// });

// export const logoutFailure = () => ({
//     type : LOGOUT_FAILURE,
// });



// export const signUpSuccess = (user) => ({
//     type : SIGNUP_SUCCESS,
//     user,
// });

// export const signUpFailure = (error) => ({
//     type : SIGNUP_FAILRUE,
//     error
// });
