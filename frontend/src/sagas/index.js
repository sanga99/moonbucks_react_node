import { all, fork } from 'reux-saga/effects';

import user from './user';  // index.js 파일이 있어야 옮겨진다.
// import post from './post';

export default function* rootSaga(){
    yield all([
        fork(user),
        // fork(post),  
    ]);
}