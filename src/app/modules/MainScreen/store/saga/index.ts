import { put, takeLatest, all, fork, delay } from 'redux-saga/effects';
import { MainScreenTypes } from '../actions/index';

function* incrementValue() {
  try {
    yield put({ type: MainScreenTypes.INCREMENT_SUCCESS });
  } catch (e) {
    yield put({ type: MainScreenTypes.INCREMENT_FAILED });
  }
}

function* decrementValue() {
  try {
    yield put({ type: MainScreenTypes.DECREMENT_SUCCESS });
  } catch (e) {
    yield put({ type: MainScreenTypes.DECREMENT_FAILED });
  }
}

function* incrementAsync() {
  try {
    yield delay(1000);
    yield all([
      put({ type: MainScreenTypes.ASYNC_INCREMENT_SUCCESS }),
      put({ type: MainScreenTypes.INCREMENT }),
    ]);
  } catch (e) {
    yield put({ type: MainScreenTypes.ASYNC_INCREMENT_FAILED });
  }
}

function* watchIncrement() {
  yield takeLatest(MainScreenTypes.INCREMENT, incrementValue);
}

function* watchDecrement() {
  yield takeLatest(MainScreenTypes.DECREMENT, decrementValue);
}

function* watchAsyncIncrement() {
  yield takeLatest(MainScreenTypes.ASYNC_INCREMENT, incrementAsync);
}

export default function* mainScreenSaga() {
  yield all([
    fork(watchIncrement),
    fork(watchDecrement),
    fork(watchAsyncIncrement),
  ]);
}
