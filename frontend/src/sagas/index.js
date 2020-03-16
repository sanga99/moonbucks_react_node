import { all, fork } from 'redux-saga/effects';

import user from './user';  // index.js 파일이 있어야 옮겨진다.
import select from './select';
import radio from './radio';
import map from './map';

export default function* rootSaga(){
    yield all([
        fork(user),
        fork(select),
        fork(radio),
        fork(map) 
    ]);
}