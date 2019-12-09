import React, { PureComponent } from 'react';
import { MainWrapper, MainTitle } from './styles';
import { Button } from 'react-native';
import Modules from '../index';
class MainScreen extends PureComponent {
    constructor() {
        super(...arguments);
        this.handleToSecondScreen = () => {
            this.props.navigation.navigate(Modules.ProfileScreenModule.name);
        };
    }
    render() {
        return (React.createElement(MainWrapper, null,
            React.createElement(MainTitle, null, "Espeo Create React Native App"),
            React.createElement(Button, { title: "Next page", onPress: this.handleToSecondScreen })));
    }
}
export default MainScreen;
