import { call, put, takeEvery, delay } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../../actions/select.action';


function selectApi( name ){     // action에서 json key값을 name이라고 줌, 여기는 상관없음(쿼리문 ?인자에서 res.data.name을 찾도록 돼있음)
    return axios.post('/api/salesTwoMonthStore', name);
}


function* select( payload ){
    try{
        const selected = payload;
        console.log('saga select' + JSON.stringify(selected));
        const { data } = yield call(selectApi, selected);
        yield put(actions.selectSuccessAction(data));
        console.log('saga select after call' + JSON.stringify(data));

    }catch(error){
        console.error('select saga error'+ error.response);
        yield put(actions.selectFailureAction(error));       // axios에서 에러
    }
}

export function* watchSelect(){
    yield takeEvery(actions.SELECT_REQUEST, select);
}