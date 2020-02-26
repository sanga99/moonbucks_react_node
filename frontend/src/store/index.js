import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const create = () => {
    const store = createStore(
        rootReducers, 
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    
    return store;
}

// store를 만들고 saga륾 미들웨어로 사용한다.
export default create;