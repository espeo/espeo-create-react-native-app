import { of, from } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { RootStore, Dependencies } from '@core/store';
import { getFilterProps } from '@core/pages/MainArticlesScreen/namespace';
import {
  MainScreenTypes,
  fetchArticlesSuccess,
  fetchArticlesFailed,
  reloadArticles,
  fetchArticlesType,
  reloadArticlesType,
  fetchArticlesSuccessType,
  fetchArticlesFailedType,
  filterArticlesType,
  clearArticlesFiltersType,
} from '../actions';

type filterSortArticlesEpicInputs =
  | filterArticlesType
  | reloadArticlesType
  | fetchArticlesFailedType;

type filterSortArticlesEpicOutputs =
  | reloadArticlesType
  | fetchArticlesFailedType;

type clearArticlesFiltersEpicInputs =
  | clearArticlesFiltersType
  | reloadArticlesType
  | fetchArticlesFailedType;

type clearArticlesFiltersEpicOutputs =
  | reloadArticlesType
  | fetchArticlesFailedType;

const getArticlesEpic: Epic<
  fetchArticlesType,
  fetchArticlesSuccessType | fetchArticlesFailedType,
  RootStore,
  Dependencies
> = (action$, _state$, { getArticlesService }) =>
  action$.pipe(
    ofType<fetchArticlesType>(MainScreenTypes.FETCH_ARTICLES),
    mergeMap(({ payload }) => {
      const { page, filters } = payload;
      const { topic, sortBy, date } = getFilterProps(filters);
      return from(getArticlesService(page, topic, sortBy, date)).pipe(
        map(({ articles }) => fetchArticlesSuccess(articles)),
        catchError(e => of(fetchArticlesFailed(e))),
      );
    }),
  );

const filterSortArticlesEpic: Epic<
  filterSortArticlesEpicInputs,
  filterSortArticlesEpicOutputs,
  RootStore,
  Dependencies
> = (action$, _state$, { getArticlesService }) =>
  action$.pipe(
    ofType<filterSortArticlesEpicInputs>(MainScreenTypes.SORT_ARTICLES_FILTER),
    mergeMap(({ payload }) => {
      const page = 1;
      const { topic, sortBy, date } = getFilterProps(payload);
      return from(getArticlesService(page, topic, sortBy, date)).pipe(
        map(({ articles }) => reloadArticles(articles)),
        catchError(e => of(fetchArticlesFailed(e))),
      );
    }),
  );

const clearArticlesFiltersEpic: Epic<
  clearArticlesFiltersEpicInputs,
  clearArticlesFiltersEpicOutputs,
  RootStore,
  Dependencies
> = (action$, _state$, { getArticlesService }) =>
  action$.pipe(
    ofType<clearArticlesFiltersEpicInputs>(MainScreenTypes.CLEAR_FILTERS),
    mergeMap(() =>
      from(getArticlesService()).pipe(
        map(({ articles }) => reloadArticles(articles)),
        catchError(e => of(fetchArticlesFailed(e))),
      ),
    ),
  );

export const articlesEpic = [
  getArticlesEpic,
  filterSortArticlesEpic,
  clearArticlesFiltersEpic,
];
