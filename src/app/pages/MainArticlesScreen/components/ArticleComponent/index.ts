import React from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { withNavigation } from 'react-navigation';

import ArticleComponent from './Article.component';

export const Article = compose(
  withNavigation(injectIntl(ArticleComponent)),
) as React.ReactType;
