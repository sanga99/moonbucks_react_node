import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducers, 
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


// store를 만들고 saga륾 미들웨어로 사용한다.
export default store;