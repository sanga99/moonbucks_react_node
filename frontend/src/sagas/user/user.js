import axios from 'axios';
import * as actions from "../../actions/user.action";
import { all, fork, call, put, delay, takeEvery } from 'redux-saga/effects';



function* login(){
    try {
        yield delay(2000);  // 2초
        yield put({
            type : actions.LOGIN_SUCCESS,
        });
    }catch(err){
        console.error(err);   // 로그인 실패
        yield put({
            type : actions.LOGIN_FAIL,
            err,
        });
    }
}

// export default function* watchLogin(){
//     yield takeEvery(LOGIN_REQUEST, login)
// }

