import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { ScreenPropsConfig } from '@common/types/navigation';
import { MainScreenState } from './store/reducers';

import {
  incrementValue,
  decrementValue,
  asyncIncrementValue,
} from './store/actions';

import MainScreen from './MainScreen';

export interface DispatchProps {
  incrementValue: () => void;
  decrementValue: () => void;
  asyncIncrementValue: () => void;
}

export interface StateProps {
  value: number;
}

interface ReducerType {
  mainScreenReducer: MainScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    value: state.mainScreenReducer.value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      incrementValue,
      decrementValue,
      asyncIncrementValue,
    },
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
