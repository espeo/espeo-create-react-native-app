import React from 'react';
import { compose } from 'redux';
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
  ArticleData,
  MainArticlesScreenState,
} from '@pages/MainArticlesScreen/namespace';
import ArticleScreen from './ArticleScreen';

export interface StateProps {
  data: Array<ArticleData>;
}

export type OwnProps = WrappedComponentProps & NavigationStackScreenProps;

interface ReducerType {
  mainScreenReducer: MainArticlesScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    data: state.mainScreenReducer.data,
  };
};

const ArticleScreenComposed = compose<
  NavigationScreenComponent<ScreenPropsConfig, NavigationStructureProps>
>(
  injectIntl,
  connect<StateProps, null, OwnProps, ReducerType>(mapStateToProps),
)(ArticleScreen);

export const ArticleScreenModule: ScreenPropsConfig = {
  module: ArticleScreenComposed,
  name: 'ArticleScreen',
  options: {
    header: () => <NavigationTitle title="mainArticles.header" />,
    headerStyle: {
      height: 60,
    },
  },
};
