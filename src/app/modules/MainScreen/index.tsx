import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

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

const mapDispatchToProps = (dispatch: any): any => {
  return bindActionCreators(
    {
      incrementValue,
      decrementValue,
      incrementAsyncValue,
    },
    dispatch,
  );
};

const MainScreenComposed = compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(MainScreen);

export const MainScreenModule = {
  module: MainScreenComposed,
  name: 'MainScreen',
  options: {
    headerLeft: null,
    headerTitle: null,
    headerRight: null,
  },
};
