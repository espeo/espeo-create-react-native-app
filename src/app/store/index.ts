import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '@store/RootReducer';
import rootSaga from '@store/RootSaga';
import { rootEpic } from '@store/RootEpic';
import { MainArticlesScreenState } from '@core/pages/MainArticlesScreen/namespace';
import { getArticlesService } from '@core/services';
import { MainScreenActions } from '@core/pages/MainArticlesScreen/store/actions';

type chosenMiddlewareType = 'saga' | 'observable';
const chosenMiddleware: chosenMiddlewareType = 'saga' as chosenMiddlewareType;

export interface RootStore {
  main: MainArticlesScreenState;
}

const dependencies = {
  getArticlesService,
};
export type Dependencies = typeof dependencies;

const epicMiddleware = createEpicMiddleware<
  MainScreenActions,
  MainScreenActions,
  RootStore,
  Dependencies
>({
  dependencies,
});

const sagaMiddleware = createSagaMiddleware();
const usedMiddleware =
  chosenMiddleware === 'saga' ? sagaMiddleware : epicMiddleware;

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleware = [usedMiddleware, logger];

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

if (chosenMiddleware === 'saga') {
  sagaMiddleware.run(rootSaga);
} else {
  epicMiddleware.run(rootEpic);
}
