import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import ArticleComponent from './Article.component';

export const Article = compose(
  injectIntl,
  connect(),
)(ArticleComponent) as React.ReactType;
