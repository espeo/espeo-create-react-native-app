import React, { PureComponent } from 'react';
import { WrappedComponentProps } from 'react-intl';
import dayjs from 'dayjs';

import { ArticleData } from '@pages/MainArticlesScreen/namespace';
import { fallbackImage } from '@core/constants';
import { StyledButton } from '@core/styles/components';
import {
  ArticleDescription,
  ArticleImage,
  ArticleTitle,
  ArticleWrapper,
  ArticleMetaDataWrapper,
  ArticleMetaTitle,
} from './Article.styles';

interface OwnProps {
  article: ArticleData;
}

type MainScreenProps = WrappedComponentProps & OwnProps;

class ArticleComponent extends PureComponent<MainScreenProps> {
  public render() {
    const { intl, article } = this.props;
    return (
      <ArticleWrapper>
        <ArticleImage
          resizeMode="cover"
          source={{
            uri: article.urlToImage ? article.urlToImage : fallbackImage,
          }}
        />
        <ArticleMetaDataWrapper>
          <ArticleMetaTitle>
            {dayjs(article.publishedAt).format('YYYY, MMM DD ')}
          </ArticleMetaTitle>
          {article.author ? (
            <ArticleMetaTitle>{article.author}</ArticleMetaTitle>
          ) : (
            <ArticleMetaTitle>
              {intl.formatMessage({ id: 'mainArticles.author' })}
            </ArticleMetaTitle>
          )}
        </ArticleMetaDataWrapper>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleDescription>{article.description}</ArticleDescription>
        <StyledButton
          title={intl.formatMessage({ id: 'mainArticles.knowMore' })}
          onPress={() => {}}
        />
      </ArticleWrapper>
    );
  }
}

export default ArticleComponent;
