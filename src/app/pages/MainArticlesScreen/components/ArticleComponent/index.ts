import React from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import ArticleComponent from './Article.component';

export const Article = compose(injectIntl)(ArticleComponent) as React.ReactType;
