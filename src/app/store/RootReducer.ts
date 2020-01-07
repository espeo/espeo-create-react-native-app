import { combineReducers, Reducer } from 'redux';

import { mainScreenReducer } from '@modules/MainScreen/store/reducers';

const rootReducer: Reducer = combineReducers({
  ageValue: mainScreenReducer,
});

export default rootReducer;
