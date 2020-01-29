import { combineReducers, Reducer } from 'redux';

// import { mainScreenReducer } from '@pages/MainArticlesScreen/store/reducers';
import { mainScreenReducer } from '@core/pages/MainArticlesScreen/store/reducers/index';

const rootReducer: Reducer = combineReducers({
  mainScreenReducer,
});

export default rootReducer;
