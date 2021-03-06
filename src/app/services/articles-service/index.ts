import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import Config from 'react-native-config';
import ApiService from '@services/config';
import {
  topicValues,
  sortValues,
  timeValues,
  ArticleDataFromAPI,
} from '@pages/MainArticlesScreen/namespace/index';

const getArticlesService = (
  page = 1,
  topic?: string,
  sortBy?: string,
  date?: string,
): Promise<ArticleDataFromAPI> => {
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
    apiKey: Config.API_KEY,
  };
  return ApiService.get<AxiosResponse<ArticleDataFromAPI>>(url, params)
    .then(({ data }) => data)
    .catch((error: string) => {
      throw new Error(error);
    });
};

export default getArticlesService;
