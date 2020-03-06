
// action type
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILRUE = 'SIGNUP_FAILURE'



// 회원가입
export const signUpRequestAction = data => ({
    type : SIGNUP_REQUEST,
    payload : {
        signUpData : data,
    },
});


// export const signUpSuccess = (user) => ({
//     type : SIGNUP_SUCCESS,
//     user,
// });

// export const signUpFailure = (error) => ({
//     type : SIGNUP_FAILRUE,
//     error
// });






/*

* 로그인은 passport로 구현

export const LOGIN_REQUEST = 'LOGIN_REQUEST';  
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// RequestAction는 DB에 user가 제대로 들어왔는지 확인하는 역할은 saga에서 확인한다.
// 로그인
export const loginRequestAction = () => ({    
    type: LOGIN_REQUEST,
});

export const loginFailureAction = data => ({    
    type: LOGIN_FAILURE,
    // payload : data,
    data   
});

// 로그아웃
export const logoutRequestAction = () => ({
    type : LOGOUT_REQUEST,
});


*/