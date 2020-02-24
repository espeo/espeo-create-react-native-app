import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';

import { Text } from '@styles/components';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { ProfileWrapper, ProfileTitle } from './components/Profile.styles';

type ProfileProps = WrappedComponentProps & NavigationStackScreenProps;

class ProfileScreen extends PureComponent<ProfileProps> {
  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { intl } = this.props;
    return (
      <ProfileWrapper>
        <ProfileTitle>
          {intl.formatMessage({ id: 'profile.title' })}
        </ProfileTitle>
        <Text>{Config.TYPE}</Text>
        <Button
          title={intl.formatMessage({ id: 'profile.button' })}
          onPress={this.handleBack}
        />
      </ProfileWrapper>
    );
  }
}

export default injectIntl(ProfileScreen);
