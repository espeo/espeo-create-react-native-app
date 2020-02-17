import { FiltersProps } from '@pages/MainArticlesScreen/namespace';

export const getFilterProps = (payload: FiltersProps): FiltersProps => {
  return {
    topic: payload.topic,
    sortBy: payload.sortBy,
    date: payload.date,
  };
};
