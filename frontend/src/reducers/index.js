// reducer들을 한 곳에 모은다.
import { combineReducers } from 'redux';
import { default as userReducer } from './user.reducer';
import { default as selectReducer} from './select.reducer';
import { default as radioReducer} from './radio.reducers';
import { default as mapReducer } from './map.reducers';

// combineReduers은 여러개의 reducer들을 하나로 합쳐준다.
const rootReducer = combineReducers({
    userReducer,        // 마지막 인자에도 꼭 ,(쉼표)를 적어야 한다. 
    adminSelected : selectReducer,
    adminRadio :radioReducer,
    mapReducer
});

export default rootReducer;
