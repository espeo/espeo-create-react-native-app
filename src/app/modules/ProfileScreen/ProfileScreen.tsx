import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { ProfileWrapper, ProfileTitle } from './styles';

interface IProps {
  navigation: any;
}

class ProfileScreen extends PureComponent<IProps> {
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
