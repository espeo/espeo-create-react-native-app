import { all, fork } from 'redux-saga/effects';

import mainScreenSaga from '@pages/MainArticlesScreen/store/saga';

export default function* rootSaga() {
  yield all([fork(mainScreenSaga)]);
}
