import { ReturnType, reduxAsyncAction } from '@namespace/index';
import { FiltersProps, ArticleData } from '@pages/MainArticlesScreen/namespace';

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

export type fetchArticlesType = ReturnType<typeof fetchArticles>;
export type fetchArticlesSuccessType = ReturnType<typeof fetchArticlesSuccess>;
export type fetchArticlesFailedType = ReturnType<typeof fetchArticlesFailed>;

export const reloadArticles = (payload: Array<ArticleData>) =>
  ({
    type: MainScreenTypes.RELOAD_ARTICLES,
    payload,
  } as const);
export type reloadArticlesType = ReturnType<typeof reloadArticles>;

export const filterArticles = (payload: FiltersProps) =>
  ({
    type: MainScreenTypes.SORT_ARTICLES_FILTER,
    payload,
  } as const);
export type filterArticlesType = ReturnType<typeof filterArticles>;

export const clearArticlesFilters = () =>
  ({
    type: MainScreenTypes.CLEAR_FILTERS,
  } as const);
export type clearArticlesFiltersType = ReturnType<typeof clearArticlesFilters>;

export type MainScreenActions =
  | fetchArticlesType
  | fetchArticlesSuccessType
  | fetchArticlesFailedType
  | reloadArticlesType
  | filterArticlesType;
