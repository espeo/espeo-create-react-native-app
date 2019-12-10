import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { ProfileWrapper, ProfileTitle } from './styles';

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
        <Button
          title={intl.formatMessage({ id: 'profile.button' })}
          onPress={this.handleBack}
        />
      </ProfileWrapper>
    );
  }
}

export default injectIntl(ProfileScreen);
