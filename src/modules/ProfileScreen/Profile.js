import React, { PureComponent } from 'react';
import { ProfileWrapper, ProfileTitle } from './Profile.styles';

class Profile extends PureComponent {
  render() {
    return (
      <ProfileWrapper>
        <ProfileTitle>Screen II => Profile</ProfileTitle>
      </ProfileWrapper>
    );
  }
}

export default Profile;
