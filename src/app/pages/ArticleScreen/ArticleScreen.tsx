import React, { PureComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WrappedComponentProps } from 'react-intl';
import { Linking } from 'react-native';
import dayjs from 'dayjs';
import { StyledButton } from '@core/styles/components';
import { fallbackImage } from '@core/constants';
import { ArticleData } from '@core/pages/MainArticlesScreen/namespace';
import { StateProps } from './index';
import {
  ArticleMetaDataWrapper,
  ArticleContent,
  ArticleContentWrapper,
  ArticleDescription,
  ArticleHeader,
  ArticleImage,
  ArticleMetaTitle,
  ArticleWrapper,
} from './components/ArticleScreen.styles';

type ArticleScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  StateProps;

class ArticleScreen extends PureComponent<ArticleScreenProps> {
  private handleBack = () => {
    this.props.navigation.goBack();
  };

  private openArticleInBrowser = () => {
    const { url } = this.props.navigation.state.params?.article;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        throw Error(`Don't know how to open URI: ${url}`);
      }
    });
  };

  public render() {
    const { intl, navigation } = this.props;
    const articleData: ArticleData = navigation.state.params?.article;

    return (
      <ArticleWrapper>
        <ArticleHeader>{articleData.title}</ArticleHeader>
        <ArticleContentWrapper>
          <ArticleDescription>{articleData.description}</ArticleDescription>
          <ArticleImage
            resizeMode="cover"
            source={{ uri: articleData.urlToImage ?? fallbackImage }}
          />
          <ArticleMetaDataWrapper>
            <ArticleMetaTitle>
              {dayjs(articleData.publishedAt).format('YYYY, MMM DD ')}
            </ArticleMetaTitle>
            <ArticleMetaTitle>
              {articleData.author ??
                intl.formatMessage({ id: 'mainArticles.author' })}
            </ArticleMetaTitle>
          </ArticleMetaDataWrapper>
          <ArticleContent>{articleData.content}</ArticleContent>
          <StyledButton
            title={intl.formatMessage(
              { id: 'articlePage.sourceLink' },
              { source: articleData.source.name },
            )}
            onPress={this.openArticleInBrowser}
          />
          <StyledButton
            title={intl.formatMessage({ id: 'articlePage.back' })}
            onPress={this.handleBack}
          />
        </ArticleContentWrapper>
      </ArticleWrapper>
    );
  }
}

export default ArticleScreen;
