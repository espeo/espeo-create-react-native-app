import React from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { NavigationScreenComponent, withNavigation } from 'react-navigation';

import ArticleComponent from './Article.component';

export const Article = withNavigation(
  compose<NavigationScreenComponent<any, any>>(injectIntl)(ArticleComponent),
) as React.ReactType;
