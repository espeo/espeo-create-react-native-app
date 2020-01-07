import { put, takeLatest, all, fork, delay } from 'redux-saga/effects';
import { MainScreenTypes } from '../actions/index';

function* incrementAync() {
  yield delay(1000);
  yield put({ type: MainScreenTypes.INCREMENT });
}

function* watchAsyncIncrement() {
  yield takeLatest(MainScreenTypes.ASYNC_INCREMENT, incrementAync);
}

export default function* mainScreenSaga() {
  yield all([fork(watchAsyncIncrement)]);
}
