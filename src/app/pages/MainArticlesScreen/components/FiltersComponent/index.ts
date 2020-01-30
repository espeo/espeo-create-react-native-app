import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import FiltersComponent from './Filters.component';

export const Filters = compose(
  injectIntl,
  connect(),
)(FiltersComponent) as React.ReactType;
