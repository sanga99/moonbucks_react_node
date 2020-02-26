import { all, fork } from 'redux-saga/effects';
import watchLogin from './user';
import userSaga from './user';

export default userSaga() {
    yield all ([
        fork(watchLogin);
    ])
}