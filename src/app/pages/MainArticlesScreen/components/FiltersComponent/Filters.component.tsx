import React, { PureComponent } from 'react';
import { WrappedComponentProps } from 'react-intl';
import { v1 } from 'uuid';
import {
  topicValues,
  timeValues,
  sortValues,
  PickerData,
} from '@pages/MainArticlesScreen/namespace';
import { StyledButton } from '@styles/components';
import { CustomModalSelector } from '@pages/MainArticlesScreen/components/ModalSelector';
import { PickersWrapper } from './Filters.styles';

interface OwnProps {
  topic: string;
  date: string;
  sortBy: string;
  clearFilters(): void;
  handlePicker(value: PickerData): void;
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

    const topicData: PickerData[] = [
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.topic.sport' }),
        value: topicValues.sport,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.topic.fashion' }),
        value: topicValues.fashion,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.topic.design' }),
        value: topicValues.design,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.topic.literature' }),
        value: topicValues.literature,
      },
    ];

    const timeData: PickerData[] = [
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.time.today' }),
        value: timeValues.today,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.time.week' }),
        value: timeValues.week,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.time.month' }),
        value: timeValues.month,
      },
    ];

    const sortData: PickerData[] = [
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.sort.popularity' }),
        value: sortValues.popularity,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.sort.publishedAt' }),
        value: sortValues.publishedAt,
      },
      {
        key: v1(),
        label: intl.formatMessage({ id: 'picker.sort.writtenIn' }),
        value: sortValues.writtenIn,
      },
    ];

    return (
      <PickersWrapper>
        <CustomModalSelector
          data={topicData}
          initValue={topic}
          onChange={handlePicker}
        />
        <CustomModalSelector
          data={timeData}
          initValue={date}
          onChange={handlePicker}
        />
        <CustomModalSelector
          data={sortData}
          initValue={sortBy}
          onChange={handlePicker}
        />
        <StyledButton
          onPress={clearFilters}
          title={intl.formatMessage({ id: 'picker.button.clear' })}
        />
      </PickersWrapper>
    );
  }
}

export default FiltersComponent;
