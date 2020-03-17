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

export const selectSuccessAction = ( twoSales, totalSales, drinkRank, foodRank, GoodsRank ) => ({
    type : SELECT_SUCCESS, 
    twoSales, totalSales, drinkRank, foodRank, GoodsRank 
    // payload = {
    //     twoSales
    // }                    
})  // (주의)reducer(case문 seccess)에서 담는 변수명과 같아야한다!!! 

export const selectFailureAction = error => ({
    type : SELECT_FAILURE,
    error
})