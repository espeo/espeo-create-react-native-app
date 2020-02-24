import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@core/pages';
import { RouteNames } from '@core/common/types/navigation';
import {
  ArticleData,
  MainArticlesScreenState,
} from '@pages/MainArticlesScreen/namespace';
import ArticleScreen from './ArticleScreen';

export interface StateProps {
  data: Array<ArticleData>;
}

interface ArticleScreenProps {
  navigation: StackNavigationProp<RootStackParamList, RouteNames.ArticleScreen>;
  route: RouteProp<RootStackParamList, RouteNames.ArticleScreen>;
}

export type OwnProps = WrappedComponentProps & ArticleScreenProps;

interface ReducerType {
  mainScreenReducer: MainArticlesScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    data: state.mainScreenReducer.data,
  };
};

export default compose(
  injectIntl,
  connect<StateProps, null, OwnProps, ReducerType>(mapStateToProps),
)(ArticleScreen) as React.ComponentType;
