import { of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { RootStore, Dependencies } from '@core/store';
import { FiltersProps } from '@core/pages/MainArticlesScreen/namespace';
import {
  MainScreenTypes,
  fetchArticlesSuccess,
  fetchArticlesFailed,
} from '../actions';

const getFilterProps = (payload: FiltersProps): FiltersProps => {
  return {
    topic: payload.topic,
    sortBy: payload.sortBy,
    date: payload.date,
  };
};

const getArticlesEpic: Epic<any, any, RootStore, Dependencies> = (
  action$,
  _state$,
  { getArticlesService },
) => {
  return action$.pipe(
    ofType(MainScreenTypes.FETCH_ARTICLES),
    switchMap(({ payload }) => {
      const { page } = payload;
      const { topic, sortBy, date } = getFilterProps(payload.filters);
      return from(getArticlesService(page, topic, sortBy, date)).pipe(
        map(({ data }: any) => fetchArticlesSuccess(data.articles)),
        catchError(e => of(fetchArticlesFailed(e))),
      );
    }),
  );
};

export const articlesEpic = [getArticlesEpic];
