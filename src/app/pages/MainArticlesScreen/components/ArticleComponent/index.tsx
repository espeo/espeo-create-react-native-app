import React, { PureComponent } from 'react';
import dayjs from 'dayjs';
import { WrappedComponentProps, injectIntl } from 'react-intl';
import { StackNavigationProp } from '@react-navigation/stack';

import { ArticleData } from '@core/pages/MainArticlesScreen/namespace';
import { RootStackParamList } from '@core/pages';
import { fallbackImage } from '@core/constants';
import { StyledButton } from '@styles/components';
import { RouteNames } from '@common/types/navigation';
import {
  ArticleDescription,
  ArticleImage,
  ArticleTitle,
  ArticleWrapper,
  ArticleMetaDataWrapper,
  ArticleMetaTitle,
} from './Article.styles';

interface ArticleScreenProps {
  article: ArticleData;
  navigation: StackNavigationProp<RootStackParamList, RouteNames.MainScreen>;
}

type OwnProps = WrappedComponentProps & ArticleScreenProps;

class ArticleComponent extends PureComponent<OwnProps> {
  private goToOwnPage = () => {
    const { article, navigation } = this.props;
    navigation.navigate(RouteNames.ArticleScreen, {
      article,
    });
  };

  public render() {
    const { intl, article } = this.props;
    return (
      <ArticleWrapper>
        <ArticleImage
          resizeMode="cover"
          source={{
            uri: article.urlToImage ?? fallbackImage,
          }}
        />
        <ArticleMetaDataWrapper>
          <ArticleMetaTitle>
            {dayjs(article.publishedAt).format('YYYY, MMM DD ')}
          </ArticleMetaTitle>
          <ArticleMetaTitle>
            {article.author ??
              intl.formatMessage({ id: 'mainArticles.author' })}
          </ArticleMetaTitle>
        </ArticleMetaDataWrapper>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleDescription>{article.description}</ArticleDescription>
        <StyledButton
          title={intl.formatMessage({ id: 'mainArticles.knowMore' })}
          onPress={this.goToOwnPage}
        />
      </ArticleWrapper>
    );
  }
}

export const Article = injectIntl(ArticleComponent) as React.ReactType;
