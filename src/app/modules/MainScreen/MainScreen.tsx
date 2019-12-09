import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { MainWrapper, MainTitle } from './styles';
import Modules from '../index';

class MainScreen extends PureComponent<NavigationStackScreenProps> {
  handleToSecondScreen = () => {
    this.props.navigation.navigate(Modules.ProfileScreenModule.name);
  };
  render() {
    return (
      <MainWrapper>
        <MainTitle>Espeo Create React Native App</MainTitle>
        <Button title="Next page" onPress={this.handleToSecondScreen} />
      </MainWrapper>
    );
  }
}

export default MainScreen;
