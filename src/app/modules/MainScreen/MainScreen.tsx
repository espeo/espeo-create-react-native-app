import React, { PureComponent } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { MainWrapper, MainTitle } from './components/Main.styles';
import Modules from '../index';
import {
  incrementValue,
  decrementValue,
  incrementAsyncValue,
} from './store/actions';

interface DispatchProps {
  decrementValueAge: any;
  incrementValueAge: any;
  incrementAsyncValueAge: any;
}

interface StateProps {
  value: number;
}

type MainScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  DispatchProps &
  StateProps;

class MainScreen extends PureComponent<MainScreenProps> {
  handleToSecondScreen = () => {
    this.props.navigation.navigate(Modules.ProfileScreenModule.name);
  };

  private handleIncrement = () => {
    const { incrementValueAge } = this.props;
    incrementValueAge();
  };

  private handleDecrement = () => {
    const { decrementValueAge } = this.props;
    decrementValueAge();
  };

  private handleDelay = () => {
    const { incrementAsyncValueAge } = this.props;
    incrementAsyncValueAge();
  };

  public render() {
    const { intl, value } = this.props;
    return (
      <MainWrapper>
        <MainTitle>{intl.formatMessage({ id: 'main.title' })}</MainTitle>
        <Button
          title={intl.formatMessage({ id: 'main.button' })}
          onPress={this.handleToSecondScreen}
        />
        <Button title="+" onPress={this.handleIncrement} />
        <Text>{value}</Text>
        <Button title="-" onPress={this.handleDecrement} />
        <Button title="+ delay" onPress={this.handleDelay} />
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    value: state.ageValue.value,
  };
};

const mapDispatchToProps = (dispatch: any): any => {
  return bindActionCreators(
    {
      incrementValueAge: incrementValue,
      decrementValueAge: decrementValue,
      incrementAsyncValueAge: incrementAsyncValue,
    },
    dispatch,
  );
};

export default compose(
  injectIntl,
  connect(mapStateToProps, mapDispatchToProps),
)(MainScreen);
