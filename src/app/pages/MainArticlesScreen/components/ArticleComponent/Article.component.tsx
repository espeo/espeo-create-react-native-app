import React, { PureComponent } from 'react';
import dayjs from 'dayjs';

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
import { OwnProps } from './index';

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

export default ArticleComponent;
