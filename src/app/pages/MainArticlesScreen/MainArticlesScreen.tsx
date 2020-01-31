import React, { PureComponent } from 'react';
import { Button, Picker, Text, View } from 'react-native';
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
import { StateProps, DispatchProps } from './index';
import { MainWrapper, MainTitle } from './components/Main.styles';

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
        <MainTitle>{intl.formatMessage({ id: 'main.title' })}</MainTitle>
        <Button
          title={intl.formatMessage({ id: 'main.button' })}
          onPress={this.handleToSecondScreen}
        />
        <Button
          onPress={this.getArticles}
          title={intl.formatMessage({ id: 'picker.button.getArticles' })}
        />
        <Button
          onPress={clearArticlesFilters}
          title={intl.formatMessage({ id: 'picker.button.clear' })}
        />
        <Picker
          selectedValue={topic}
          style={{ height: 50, width: 200 }}
          onValueChange={this.handleFilterPicker}
        >
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.topic.sport' })}
            value={topicValues.sport}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.topic.fashion' })}
            value={topicValues.fashion}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.topic.design' })}
            value={topicValues.design}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.topic.literature' })}
            value={topicValues.literature}
          />
        </Picker>
        <Picker
          selectedValue={date}
          style={{ height: 50, width: 200 }}
          onValueChange={this.handleFilterPicker}
        >
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.time.today' })}
            value={timeValues.today}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.time.week' })}
            value={timeValues.week}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.time.month' })}
            value={timeValues.month}
          />
        </Picker>
        <Picker
          selectedValue={sortBy}
          style={{ height: 50, width: 200 }}
          onValueChange={this.handleFilterPicker}
        >
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.sort.popularity' })}
            value={sortValues.popularity}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.sort.publishedAt' })}
            value={sortValues.publishedAt}
          />
          <Picker.Item
            label={intl.formatMessage({ id: 'picker.sort.writtenIn' })}
            value={sortValues.writtenIn}
          />
        </Picker>
        <View>
          {data.map((article: ArticleData) => (
            <View key={article.publishedAt + v1()}>
              <Text>{article.title}</Text>
            </View>
          ))}
        </View>
      </MainWrapper>
    );
  }
}

export default MainScreen;
