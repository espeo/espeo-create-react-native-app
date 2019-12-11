import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { MainWrapper, MainTitle } from './styles';
import Modules from '../index';

type MainScreenProps = WrappedComponentProps & NavigationStackScreenProps;

class MainScreen extends PureComponent<MainScreenProps> {
  handleToSecondScreen = () => {
    this.props.navigation.navigate(Modules.ProfileScreenModule.name);
  };
  public render() {
    const { intl } = this.props;
    return (
      <MainWrapper>
        <MainTitle>{intl.formatMessage({ id: 'main.title' })}</MainTitle>
        <Button
          title={intl.formatMessage({ id: 'main.button' })}
          onPress={this.handleToSecondScreen}
        />
      </MainWrapper>
    );
  }
}

export default injectIntl(MainScreen);
