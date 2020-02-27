// reducer들을 한 곳에 모은다.
import { combineReducers } from 'redux';
import { default as userReducer } from './user.reducer';
// combineReduers은 여러개의 reducer들을 하나로 합쳐준다.

const rootReducer = combineReducers({
    userReducer,        // 마지막 인자에도 꼭 ,(쉼표)를 적어야 한다. 
});

export default rootReducer;