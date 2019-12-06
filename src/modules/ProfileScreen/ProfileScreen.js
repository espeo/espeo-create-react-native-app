import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { ProfileWrapper, ProfileTitle } from './ProfileScreen.styles';
import Modules from '../index';

class ProfileScreen extends PureComponent {
  handleBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <ProfileWrapper>
        <ProfileTitle>Profile</ProfileTitle>
        <Button title="Back" onPress={this.handleBack} />
      </ProfileWrapper>
    );
  }
}

export default ProfileScreen;
