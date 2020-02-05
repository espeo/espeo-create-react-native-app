import React, { PureComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WrappedComponentProps } from 'react-intl';
import dayjs from 'dayjs';

import { ArticleData } from '@pages/MainArticlesScreen/namespace';
import { fallbackImage } from '@core/constants';
import { StyledButton } from '@core/styles/components';
import Modules from '@pages/index';
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

type ArticleScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  OwnProps;

class ArticleComponent extends PureComponent<ArticleScreenProps> {
  private goToOwnPage = () => {
    this.props.navigation.navigate(Modules.ArticleScreenModule.name, {
      article: this.props.article,
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
