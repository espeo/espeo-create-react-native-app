import { combineReducers, Reducer } from 'redux';

import { mainScreenReducer } from '@modules/MainArticlesScreen/store/reducers';

const rootReducer: Reducer = combineReducers({
  mainScreenReducer,
});

export default rootReducer;
