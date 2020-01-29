import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import {
  FiltersProps,
  FetchArticlesArgs,
} from '@modules/MainArticlesScreen/namespace';
import { getArticlesService } from '@core/services';
import {
  MainScreenTypes,
  fetchArticlesSuccess,
  fetchArticlesFailed,
  reloadArticles,
} from '../actions';

const getFilterProps = (payload: FiltersProps): FiltersProps => {
  return {
    topic: payload.topic,
    sortBy: payload.sortBy,
    date: payload.date,
  };
};

function* getArticles(action: { payload: FetchArticlesArgs; type: string }) {
  try {
    const { page } = action.payload;
    const { topic, sortBy, date } = getFilterProps(action.payload.filters);
    const { data } = yield call(getArticlesService, page, topic, sortBy, date);
    yield put(fetchArticlesSuccess(data.articles));
  } catch (e) {
    yield put(fetchArticlesFailed(e));
  }
}

function* filterSortArticles(action: { type: string; payload: FiltersProps }) {
  try {
    const { topic, sortBy, date } = getFilterProps(action.payload);
    const page = 1;
    const { data } = yield call(getArticlesService, page, topic, sortBy, date);
    yield put(reloadArticles(data.articles));
  } catch (e) {
    yield put(fetchArticlesFailed(e));
  }
}

function* clearArticlesFilters() {
  try {
    const { data } = yield call(getArticlesService);
    yield put(reloadArticles(data.articles));
  } catch (e) {
    yield put(fetchArticlesFailed(e));
  }
}

function* watchGetArticles() {
  yield takeLatest(MainScreenTypes.FETCH_ARTICLES, getArticles);
}

function* watchFilterArticles() {
  yield takeLatest(MainScreenTypes.SORT_ARTICLES_FILTER, filterSortArticles);
}

function* watchClearFilters() {
  yield takeLatest(MainScreenTypes.CLEAR_FILTERS, clearArticlesFilters);
}

export default function* mainScreenSaga() {
  yield all([
    fork(watchGetArticles),
    fork(watchFilterArticles),
    fork(watchClearFilters),
  ]);
}
