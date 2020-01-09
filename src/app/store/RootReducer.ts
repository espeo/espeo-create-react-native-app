import { combineReducers, Reducer } from 'redux';

import { mainScreenReducer } from '@modules/MainScreen/store/reducers';

const rootReducer: Reducer = combineReducers({
  mainScreenReducer,
});

export default rootReducer;
