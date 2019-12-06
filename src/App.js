import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationStructure } from './modules';
import { AppWrapper } from './App.styles';
// import MainScreen from './modules/';

const AppNavigator = createStackNavigator(navigationStructure);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <AppContainer />
      </AppWrapper>
    );
  }
}
