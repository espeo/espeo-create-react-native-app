import { all, fork } from 'redux-saga/effects';

import mainScreenSaga from '@modules/MainArticlesScreen/store/saga';

export default function* rootSaga() {
  yield all([fork(mainScreenSaga)]);
}
