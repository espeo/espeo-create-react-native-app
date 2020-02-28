import React from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@core/pages';
import { RouteNames } from '@common/types/navigation';
import {
  MainArticlesScreenState,
  ArticleData,
  FiltersProps,
  topicTypes,
  sortTypes,
  timeTypes,
  FetchArticlesArgs,
} from './namespace';
import {
  fetchArticles,
  filterArticles,
  clearArticlesFilters,
} from './store/actions';
import MainScreen from './MainArticlesScreen';

export interface DispatchProps {
  fetchArticles(fetchArgs: FetchArticlesArgs): void;
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

interface MainArticlesScreenProps {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.MainScreen>;
}

export type OwnProps = WrappedComponentProps & MainArticlesScreenProps;

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

export default compose(
  injectIntl,
  connect<StateProps, DispatchProps, OwnProps, ReducerType>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MainScreen) as React.ComponentType;
