import React from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import FiltersComponent from './Filters.component';

export const Filters = compose(injectIntl)(FiltersComponent) as React.ReactType;
