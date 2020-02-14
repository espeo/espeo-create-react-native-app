import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
// eslint-disable-next-line
// @ts-ignore
import { API_KEY as apiKey } from 'react-native-dotenv';
import ApiService from '@services/config';
import { ArticleDataFromAPI } from '@core/pages/MainArticlesScreen/namespace';
import {
  topicValues,
  sortValues,
  timeValues,
} from '@pages/MainArticlesScreen/namespace/index';

const getArticlesService = (
  page = 1,
  topic?: string,
  sortBy?: string,
  date?: string,
) => {
  const now = dayjs();
  const selectedTopic = topic || topicValues.sport;
  const sort = sortBy || sortValues.popularity;
  const to = now.format('YYYY-MM-DD');
  let from;
  switch (date) {
    case timeValues.today:
      from = to;
      break;
    case timeValues.week:
      from = now.subtract(7, 'day').format('YYYY-MM-DD');
      break;
    case timeValues.month:
      from = now.subtract(10, 'day').format('YYYY-MM-DD');
      break;
    default:
      from = to;
  }

  const url = `everything`;
  const params = {
    q: selectedTopic,
    page,
    sortBy: sort,
    from,
    to,
    apiKey,
  };
  return ApiService.get<AxiosResponse<ArticleDataFromAPI>>(url, params)
    .then(({ data }) => data)
    .catch((error: string) => {
      throw new Error(error);
    });
};

export default getArticlesService;
