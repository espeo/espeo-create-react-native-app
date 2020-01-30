import React, { PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import { WrappedComponentProps } from 'react-intl';

import { ArticleData } from '@pages/MainArticlesScreen/namespace';

interface OwnProps {
  article: ArticleData;
}

type MainScreenProps = WrappedComponentProps & OwnProps;

class ArticleComponent extends PureComponent<MainScreenProps> {
  public render() {
    const { intl, article } = this.props;
    const {
      author,
      title,
      content,
      description,
      publishedAt,
      source,
    } = article;
    return <View></View>;
  }
}

export default ArticleComponent;
