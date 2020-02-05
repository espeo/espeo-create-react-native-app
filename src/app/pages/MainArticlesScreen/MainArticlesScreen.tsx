import React, { PureComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WrappedComponentProps } from 'react-intl';
import { v1 } from 'uuid';
import {
  topicValues,
  timeValues,
  sortValues,
  PickerData,
} from '@pages/MainArticlesScreen/namespace';
import { ProfileScreenModule } from '@pages/ProfileScreen';

import { StyledButton } from '@core/styles/components';
import { StateProps, DispatchProps } from './index';
import { Filters, Article, MainWrapper, ArticlesFlatList } from './components';

type MainScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  StateProps &
  DispatchProps;

class MainScreen extends PureComponent<MainScreenProps> {
  public componentDidMount() {
    this.getArticles();
  }

  private handleToSecondScreen = () => {
    this.props.navigation.navigate(ProfileScreenModule.name);
  };

  private getArticles = () => {
    const { page, topic, sortBy, date } = this.props;
    this.props.fetchArticles({
      page,
      filters: { topic, sortBy, date },
    });
  };

  private handleFilterPicker = ({ value }: Pick<PickerData, 'value'>) => {
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
        <ArticlesFlatList
          data={data}
          renderItem={({ item }) => <Article article={item} />}
          initialNumToRender={5}
          keyExtractor={() => v1()}
          ListHeaderComponent={
            <Filters
              topic={topic}
              date={date}
              sortBy={sortBy}
              clearFilters={clearArticlesFilters}
              handlePicker={this.handleFilterPicker}
            />
          }
          ListFooterComponent={
            <StyledButton
              title={intl.formatMessage({ id: 'main.button' })}
              onPress={this.handleToSecondScreen}
            />
          }
          centerContent
        />
      </MainWrapper>
    );
  }
}

export default MainScreen;
