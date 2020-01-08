import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { ScreenPropsConfig } from '@common/types/navigation';

import {
  incrementValue,
  decrementValue,
  incrementAsyncValue,
} from './store/actions';

import MainScreen from './MainScreen';

export interface DispatchProps {
  incrementValue: () => void;
  decrementValue: () => void;
  incrementAsyncValue: () => void;
}

export interface StateProps {
  value: number;
}

const mapStateToProps = (state: any): StateProps => {
  return {
    value: state.ageValue.value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      incrementValue,
      decrementValue,
      incrementAsyncValue,
    },
    dispatch,
  );

const MainScreenComposed = compose<NavigationScreenComponent<any, any>>(
  injectIntl,
  connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps),
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
