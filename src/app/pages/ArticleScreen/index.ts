import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { defaultTheme } from '@styles/themes';

import { ScreenPropsConfig } from '@common/types/navigation';
import {
  ArticleData,
  MainArticlesScreenState,
} from '@pages/MainArticlesScreen/namespace';
import ArticleScreen from './ArticleScreen';

export interface StateProps {
  data: Array<ArticleData>;
}

interface ReducerType {
  mainScreenReducer: MainArticlesScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    data: state.mainScreenReducer.data,
  };
};

const ArticleScreenComposed = compose<NavigationScreenComponent<any, any>>(
  injectIntl,
  connect<StateProps, null, any, ReducerType>(mapStateToProps),
)(ArticleScreen);

export const ArticleScreenModule: ScreenPropsConfig = {
  module: ArticleScreenComposed,
  name: 'ArticleScreen',
  options: {
    title: 'Time for new information',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: defaultTheme.colors.secondary,
    },
    headerTintColor: defaultTheme.colors.light,
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      flex: 1,
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },
  },
};
