import { reduxAsyncReducer } from '@namespace/index';
import {
  MainArticlesScreenState,
  topicValues,
  sortValues,
  timeValues,
} from '@modules/MainArticlesScreen/namespace';
import { MainScreenTypes, MainScreenActions } from '../actions';

export const initialState: MainArticlesScreenState = {
  isLoading: false,
  error: false,
  page: 1,
  topic: topicValues.sport,
  sortBy: sortValues.writtenIn,
  date: timeValues.month,
  data: [],
};

const {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILED,
  CLEAR_FILTERS,
  RELOAD_ARTICLES,
  SORT_ARTICLES_FILTER,
} = MainScreenTypes;

export const mainScreenReducer = (
  state = initialState,
  action: MainScreenActions,
) => {
  switch (action.type) {
    case FETCH_ARTICLES:
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_FAILED:
      return reduxAsyncReducer<MainScreenActions, MainArticlesScreenState>(
        FETCH_ARTICLES,
        action,
        state,
      );
    case RELOAD_ARTICLES:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case SORT_ARTICLES_FILTER:
      return {
        ...state,
        date: action.payload.date,
        sortBy: action.payload.sortBy,
        topic: action.payload.topic,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        topic: topicValues.sport,
        sortBy: sortValues.writtenIn,
        date: timeValues.month,
      };
    default:
      return state;
  }
};
