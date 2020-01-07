import React, { PureComponent } from 'react';
// import { compose, bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { Button, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
// import { injectIntl, WrappedComponentProps } from 'react-intl';
import { WrappedComponentProps } from 'react-intl';

import { MainWrapper, MainTitle } from './components/Main.styles';
import Modules from '../index';

interface OwnProps {
  decrementValue: any;
  incrementValue: any;
  incrementAsyncValue: any;
  value: number;
}

type MainScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  OwnProps;

class MainScreen extends PureComponent<MainScreenProps> {
  handleToSecondScreen = () => {
    this.props.navigation.navigate(Modules.ProfileScreenModule.name);
  };

  private handleIncrement = () => {
    const { incrementValue } = this.props;
    incrementValue();
  };

  private handleDecrement = () => {
    const { decrementValue } = this.props;
    decrementValue();
  };

  private handleDelay = () => {
    const { incrementAsyncValue } = this.props;
    incrementAsyncValue();
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

export default MainScreen;
