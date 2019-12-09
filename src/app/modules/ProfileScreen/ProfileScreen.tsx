import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { ProfileWrapper, ProfileTitle } from './styles';

class ProfileScreen extends PureComponent<NavigationStackScreenProps> {
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
