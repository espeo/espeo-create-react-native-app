import React, { PureComponent } from 'react';
import Config from 'react-native-config';
import { Button, Text } from 'react-native';
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
        <Text>{Config.TYPE}</Text>
        <Button
          title={intl.formatMessage({ id: 'profile.button' })}
          onPress={this.handleBack}
        />
      </ProfileWrapper>
    );
  }
}
