import * as actions from '../actions/select.action';

const InitialState = {
    selected : ''
}

const selectReducer = (state = InitialState, { type, payload, error}) => {
    switch(type){
        case actions.SELECT_REQUEST:
            return {
                ...state, 
                selected : payload
            }
        case actions.SELECT_SUCCESS:
            console.log('reducer'+payload);     // (주의)action(selectSuccessAction)에서 담는 변수명과 같아야한다!!! 
            return {
                ...state, 
                result : payload
            }
        case actions.SELECT_FAILURE:
            return {
                ...state, 
                error
            }
        default:
            return state;
    }
}

export default selectReducer;
