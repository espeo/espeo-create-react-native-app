import React, { PureComponent } from 'react';
import { Button } from 'react-native';
import { WrappedComponentProps } from 'react-intl';
import { ProfileWrapper, ProfileTitle } from './components/Profile.styles';
import { ProfileScreenProps } from './index';

type OwnProps = WrappedComponentProps & ProfileScreenProps;

export class ProfileScreen extends PureComponent<OwnProps> {
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
