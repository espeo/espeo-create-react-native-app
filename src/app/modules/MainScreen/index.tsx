import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';

import {
  incrementValue,
  decrementValue,
  incrementAsyncValue,
} from './store/actions';

import MainScreen from './MainScreen';

const mapStateToProps = (state: any): any => {
  return {
    value: state.ageValue.value,
  };
};

const mapDispatchToProps: any = {
  incrementValue,
  decrementValue,
  incrementAsyncValue,
};

const MainScreenComposed = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(MainScreen);

interface ScreenPropsConfig {
  options: NavigationStackOptions;
  module: NavigationScreenComponent<any, any>;
  name: string;
}

export const MainScreenModule: ScreenPropsConfig = {
  module: MainScreenComposed as NavigationScreenComponent<any, any>,
  name: 'MainScreen',
  options: {
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
  },
};
