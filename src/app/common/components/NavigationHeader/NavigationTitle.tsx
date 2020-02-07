import React, { PureComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { NavigationWrapper, NavigationTitle } from './NavigationTitle.styles';

interface OwnProps {
  title: string;
}

type NavigationHeaderProps = OwnProps & WrappedComponentProps;

class NavigationHeader extends PureComponent<NavigationHeaderProps> {
  public render() {
    const { intl, title } = this.props;

    return (
      <NavigationWrapper>
        <NavigationTitle>{intl.formatMessage({ id: title })}</NavigationTitle>
      </NavigationWrapper>
    );
  }
}

export default injectIntl(NavigationHeader);
