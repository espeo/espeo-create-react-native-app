import React, { PureComponent } from 'react';
import { Linking } from 'react-native';
import dayjs from 'dayjs';
import { WrappedComponentProps } from 'react-intl';
import { StyledButton } from '@styles/components';
import { fallbackImage } from '@core/constants';
import { StateProps, ArticleScreenProps } from './index';
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

type OwnProps = StateProps & WrappedComponentProps & ArticleScreenProps;

class ArticleScreen extends PureComponent<OwnProps> {
  private handleBack = () => {
    this.props.navigation.goBack();
  };

  private openArticleInBrowser = () => {
    const { intl, route } = this.props;
    const { url } = route.params.article;
    try {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          throw Error(
            intl.formatMessage({ id: 'articlePage.urlError' }, { url }),
          );
        }
      });
    } catch {
      throw Error(intl.formatMessage({ id: 'articlePage.urlUndefined' }));
    }
  };

  public render() {
    const { intl, route } = this.props;
    const articleData = route.params.article;

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
