export const SELECT_REQUEST = 'SELECT_REQUEST';
export const SELECT_SUCCESS = 'SELECT_SUCCESS';
export const SELECT_FAILURE = 'SELECT_FAILURE';

// export const selectRequestAction = selected => ({
//     type : SELECT_REQUEST,
//     data : selected // payload : selected
// });
export const selectRequestAction = selected => ({
    type : SELECT_REQUEST,
    name : selected // payload : selected
});

export const selectSuccessAction = payload => ({
    type : SELECT_SUCCESS, 
    payload                     // (주의)  // (주의)reducer(case문 seccess)에서 담는 변수명과 같아야한다!!! 
})

export const selectFailureAction = error => ({
    type : SELECT_FAILURE,
    error
})