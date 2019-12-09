import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { ProfileWrapper, ProfileTitle } from './styles';
class ProfileScreen extends PureComponent {
    constructor() {
        super(...arguments);
        this.handleBack = () => {
            this.props.navigation.goBack();
        };
    }
    render() {
        return (React.createElement(ProfileWrapper, null,
            React.createElement(ProfileTitle, null, "Profile"),
            React.createElement(Button, { title: "Back", onPress: this.handleBack })));
    }
}
export default ProfileScreen;
