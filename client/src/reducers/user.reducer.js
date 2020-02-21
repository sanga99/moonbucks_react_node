// reducer을 먼저 만들고 store에 연결해준다
// store안에 reducer가 들어간다.

import {  LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/user.action';
import { combineReducers} from 'redux';
// combineReduers은 여러개의 reducer들을 하나로 합쳐준다.


// state초기값
const loginInitialState = {
    isLoggedIn : false,
    user : {}
}

const loginReducer = (state= loginInitialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                // 반드시 새로운 객체를 반환해야 하므로! 기존 state를 복사한다.
                isLoggedIn : true,
                user : action.result
                // user에 서버로부터 받은 유저 정보(action.result)를 넣어준다.
            };
        case LOGIN_FAIL:
            return { 
                ...state
            };
        default:
            return state;
    }
}


// combindReducer 사용
// const userReducer = combineReducers({
//     loginReducer
// });


export default loginReducer;