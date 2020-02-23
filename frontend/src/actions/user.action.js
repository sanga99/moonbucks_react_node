
// action type
// export const LOGIN_SUBMIT = 'LOGIN';   // login submit
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// export const loginSubmit = (id, name) => {
//     return {
//         type : LOGIN_SUBMIT
//         // promise : { method : 'post', url : '/login', data : {id, password}}
//     };
// };
// 해당 login함수를 dispatch하면 -> store에 action이 전달된다.


export const loginSuccess = ()=> ({
    type : LOGIN_SUCCESS
});

export const loginFail = () => ({
    type : LOGIN_FAIL
});