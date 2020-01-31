import React, { PureComponent } from 'react';
import { Picker } from 'react-native';
import { WrappedComponentProps } from 'react-intl';
import {
  topicValues,
  timeValues,
  sortValues,
} from '@pages/MainArticlesScreen/namespace';
import StyledButton from '@styles/components/buttons';
import {
  StyledPicker,
  PickersWrapper,
  PickerWrapper,
  PickersButtonWrapper,
} from './Filters.styles';

interface OwnProps {
  topic: string;
  date: string;
  sortBy: string;
  clearFilters(): void;
  handlePicker(filter: string): void;
}

type FiltersProps = WrappedComponentProps & OwnProps;

class FiltersComponent extends PureComponent<FiltersProps> {
  public render() {
    const {
      intl,
      topic,
      date,
      sortBy,
      clearFilters,
      handlePicker,
    } = this.props;

    return (
      <PickersWrapper>
        <PickerWrapper>
          <StyledPicker selectedValue={topic} onValueChange={handlePicker}>
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
          </StyledPicker>
        </PickerWrapper>
        <PickerWrapper>
          <StyledPicker selectedValue={date} onValueChange={handlePicker}>
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
          </StyledPicker>
        </PickerWrapper>
        <PickerWrapper>
          <StyledPicker selectedValue={sortBy} onValueChange={handlePicker}>
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
          </StyledPicker>
        </PickerWrapper>
        <PickersButtonWrapper>
          <StyledButton
            onPress={clearFilters}
            title={intl.formatMessage({ id: 'picker.button.clear' })}
          />
        </PickersButtonWrapper>
      </PickersWrapper>
    );
  }
}

export default FiltersComponent;
