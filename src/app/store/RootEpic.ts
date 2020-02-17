import { combineEpics } from 'redux-observable';

import { articlesEpic } from '@core/pages/MainArticlesScreen/store/epics';

export const rootEpic = combineEpics(...articlesEpic);
