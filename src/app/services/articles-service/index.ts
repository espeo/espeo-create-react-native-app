import dayjs from 'dayjs';
// eslint-disable-next-line
// @ts-ignore
import { API_KEY as apiKey } from 'react-native-dotenv';
import ApiService from '@services/config';
import {
  topicValues,
  sortValues,
  timeValues,
} from '@modules/MainArticlesScreen/namespace/index';

const now = dayjs();

const getArticlesService = (
  page = 1,
  topic?: string,
  sortBy?: string,
  date?: string,
) => {
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

  const myUrl = `everything?q=${selectedTopic}&page=${page}&sortBy=${sort}&from=${from}&to=${to}&apiKey=${apiKey}`;
  return ApiService.get(myUrl)
    .then((data: any) => data)
    .catch((error: any) => {
      throw new Error(error);
    });
};

export default getArticlesService;
