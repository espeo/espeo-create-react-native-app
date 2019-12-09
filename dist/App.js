import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationStructure } from './app/modules';
// import { AppWrapper } from './styled';
import { View } from 'react-native';
// import ThemeProvider from 'styled-components';
// import { defaultTheme } from './app/styles/themes/defaultTheme';
const AppNavigator = createStackNavigator(navigationStructure);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends PureComponent {
    render() {
        return (React.createElement(View, { style: { flexGrow: 1 } },
            React.createElement(AppContainer, null)));
    }
}
