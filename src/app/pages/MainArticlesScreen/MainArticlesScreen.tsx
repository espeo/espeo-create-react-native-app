import React, { PureComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WrappedComponentProps } from 'react-intl';
import { v1 } from 'uuid';

import {
  ArticleData,
  topicValues,
  timeValues,
  sortValues,
} from '@pages/MainArticlesScreen/namespace';
import Modules from '@pages/index';
import StyledButton from '@styles/components/buttons';
import { StateProps, DispatchProps } from './index';
import {
  MainWrapper,
  ArticlesWrapper,
  MainScrollView,
} from './components/Main.styles';
import { Filters, Article } from './components';

type MainScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  StateProps &
  DispatchProps;

class MainScreen extends PureComponent<MainScreenProps> {
  public componentDidMount() {
    this.getArticles();
  }

  private handleToSecondScreen = () => {
    this.props.navigation.navigate(Modules.ProfileScreenModule.name);
  };

  private getArticles = () => {
    const { page, topic, sortBy, date } = this.props;
    this.props.fetchArticles({
      page,
      filters: { topic, sortBy, date },
    });
  };

  private handleFilterPicker = (value: string) => {
    const { filterArticles, topic, sortBy, date } = this.props;
    if (value in topicValues) {
      filterArticles({ topic: value, sortBy, date });
    }
    if (value in timeValues) {
      filterArticles({ date: value, sortBy, topic });
    }
    if (value in sortValues) {
      filterArticles({ sortBy: value, topic, date });
    }
  };

  public render() {
    const {
      intl,
      data,
      topic,
      date,
      sortBy,
      clearArticlesFilters,
    } = this.props;
    return (
      <MainWrapper>
        <MainScrollView>
          <Filters
            topic={topic}
            date={date}
            sortBy={sortBy}
            clearFilters={clearArticlesFilters}
            handlePicker={this.handleFilterPicker}
          />
          <ArticlesWrapper>
            {data.map((article: ArticleData) => (
              <Article key={article.publishedAt + v1()} article={article} />
            ))}
          </ArticlesWrapper>
          <StyledButton
            title={intl.formatMessage({ id: 'main.button' })}
            onPress={this.handleToSecondScreen}
          />
        </MainScrollView>
      </MainWrapper>
    );
  }
}

export default MainScreen;
