import React from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { StackNavigationProp } from '@react-navigation/stack';

import { ArticleData } from '@core/pages/MainArticlesScreen/namespace';
import { RootStackParamList } from '@core/pages';
import { RouteNames } from '@core/common/types/navigation';
import ArticleComponent from './Article.component';

interface ArticleScreenProps {
  article: ArticleData;
  navigation: StackNavigationProp<RootStackParamList, RouteNames.MainScreen>;
}

export type OwnProps = WrappedComponentProps & ArticleScreenProps;

export const Article = injectIntl(ArticleComponent) as React.ReactType;
