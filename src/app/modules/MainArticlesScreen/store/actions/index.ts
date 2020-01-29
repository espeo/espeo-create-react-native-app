import { ReturnType, reduxAsyncAction } from '@namespace/index';
import {
  FiltersProps,
  ArticleData,
} from '@modules/MainArticlesScreen/namespace';

export enum MainScreenTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED',
  RELOAD_ARTICLES = 'RELOAD_ARTICLES',
  SORT_ARTICLES_FILTER = 'SORT_ARTICLES_FILTER',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
}

export const {
  execute: fetchArticles,
  success: fetchArticlesSuccess,
  failed: fetchArticlesFailed,
} = reduxAsyncAction(MainScreenTypes.FETCH_ARTICLES);

export const reloadArticles = (payload: Array<ArticleData>) =>
  ({
    type: MainScreenTypes.RELOAD_ARTICLES,
    payload,
  } as const);

export const filterArticles = (payload: FiltersProps) => ({
  type: MainScreenTypes.SORT_ARTICLES_FILTER,
  payload,
});

export const clearArticlesFilters = () =>
  ({
    type: MainScreenTypes.CLEAR_FILTERS,
  } as const);

export type MainScreenActions =
  | ReturnType<typeof fetchArticles>
  | ReturnType<typeof fetchArticlesSuccess>
  | ReturnType<typeof fetchArticlesFailed>;
