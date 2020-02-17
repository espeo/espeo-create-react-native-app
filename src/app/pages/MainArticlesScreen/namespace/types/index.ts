export enum timeValues {
  today = 'today',
  week = 'week',
  month = 'month',
}
export type timeTypes = keyof typeof timeValues;

export enum topicValues {
  sport = 'sport',
  design = 'design',
  literature = 'literature',
  fashion = 'fashion',
}
export type topicTypes = keyof typeof topicValues;

export enum sortValues {
  popularity = 'popularity',
  writtenIn = 'writtenIn',
  publishedAt = 'publishedAt',
}
export type sortTypes = keyof typeof sortValues;

export interface FiltersProps {
  topic: string;
  sortBy: string;
  date: string;
  page?: number;
}

export interface MainArticlesScreenState {
  isLoading: boolean;
  error: boolean;
  page: number;
  topic: topicTypes;
  sortBy: sortTypes;
  date: timeTypes;
  data: Array<ArticleData>;
}

export interface ArticleData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | string;
    name: string;
  };
  id: null;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticleDataFromAPI {
  articles: Array<ArticleData>;
}

export interface FetchArticlesArgs {
  page: number;
  filters: FiltersProps;
}

export interface PickerData {
  key: string;
  label: string;
  value: timeValues | sortValues | topicValues;
}
