import React from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  NavigationStructureProps,
  ScreenPropsConfig,
} from '@common/types/navigation';
import { NavigationTitle } from '@common/components';
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

export type OwnProps = WrappedComponentProps & NavigationStackScreenProps;

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

const MainScreenComposed = compose<
  NavigationScreenComponent<ScreenPropsConfig, NavigationStructureProps>
>(
  injectIntl,
  connect<StateProps, DispatchProps, OwnProps, ReducerType>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MainScreen);

export const MainScreenModule: ScreenPropsConfig = {
  module: MainScreenComposed,
  name: 'MainScreen',
  options: {
    header: () => <NavigationTitle title="mainArticles.header" />,
    headerStyle: {
      height: 60,
    },
  },
};
