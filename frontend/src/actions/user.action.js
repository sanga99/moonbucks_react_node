
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


export const loginRequestAction = data => ({
    type: LOGIN_REQUEST,
    payload : {
        loginData : data,
    },
});

export const logoutRequestAction = () => ({
    type : LOGOUT_REQUEST,
});

export const signUpRequestAction = data => ({
    type : SIGNUP_REQUEST,
    payload : {
        signUpData : data,
    },
});


// export const loginSuccess = ()=> ({
//     type : LOGIN_SUCCESS
// });

// export const loginFail = () => ({
//     type : LOGIN_FAIL
// });