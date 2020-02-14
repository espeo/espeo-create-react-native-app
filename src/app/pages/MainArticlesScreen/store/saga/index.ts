import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import {
  FiltersProps,
  getFilterProps,
  FetchArticlesArgs,
} from '@pages/MainArticlesScreen/namespace';
import { getArticlesService } from '@core/services';
import {
  MainScreenTypes,
  fetchArticlesSuccess,
  fetchArticlesFailed,
  reloadArticles,
} from '../actions';

function* getArticles(action: { payload: FetchArticlesArgs; type: string }) {
  try {
    const { page, filters } = action.payload;
    const { topic, sortBy, date } = getFilterProps(filters);
    const { articles } = yield call(
      getArticlesService,
      page,
      topic,
      sortBy,
      date,
    );
    yield put(fetchArticlesSuccess(articles));
  } catch (e) {
    yield put(fetchArticlesFailed(e));
  }
}

function* filterSortArticles(action: { type: string; payload: FiltersProps }) {
  try {
    const { topic, sortBy, date } = getFilterProps(action.payload);
    const page = 1;
    const { articles } = yield call(
      getArticlesService,
      page,
      topic,
      sortBy,
      date,
    );
    yield put(reloadArticles(articles));
  } catch (e) {
    yield put(fetchArticlesFailed(e));
  }
}

function* clearArticlesFilters() {
  try {
    const { articles } = yield call(getArticlesService);
    yield put(reloadArticles(articles));
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
