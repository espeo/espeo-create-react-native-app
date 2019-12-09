import React, { PureComponent } from 'react';
import { MainWrapper, MainTitle } from './styles';
import { Button } from 'react-native';
import Modules from '../index';

interface IProps {
  navigation: any;
}

class MainScreen extends PureComponent<IProps> {
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
