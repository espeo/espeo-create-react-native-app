import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';

import { ScreenPropsConfig } from '@common/types/navigation';
import {
  MainArticlesScreenState,
  ArticleData,
  FiltersProps,
  topicTypes,
  sortTypes,
  timeTypes,
} from './namespace';
import {
  fetchArticles,
  filterArticles,
  clearArticlesFilters,
} from './store/actions';
import MainScreen from './MainArticlesScreen';

interface FetchArgs {
  page: number;
  filters: FiltersProps;
}

export interface DispatchProps {
  fetchArticles(fetchArgs: FetchArgs): void;
  filterArticles(filters: FiltersProps): void;
  clearArticlesFilters(): void;
}

export interface StateProps {
  data: Array<ArticleData>;
  page: number;
  topic: topicTypes;
  sortBy: sortTypes;
  date: timeTypes;
}

interface ReducerType {
  mainScreenReducer: MainArticlesScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    data: state.mainScreenReducer.data,
    page: state.mainScreenReducer.page,
    topic: state.mainScreenReducer.topic,
    sortBy: state.mainScreenReducer.sortBy,
    date: state.mainScreenReducer.date,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    { fetchArticles, filterArticles, clearArticlesFilters },
    dispatch,
  );

const MainScreenComposed = compose<NavigationScreenComponent<any, any>>(
  injectIntl,
  connect<StateProps, DispatchProps, any, ReducerType>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MainScreen);

export const MainScreenModule: ScreenPropsConfig = {
  module: MainScreenComposed,
  name: 'MainScreen',
  options: {
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
  },
};
