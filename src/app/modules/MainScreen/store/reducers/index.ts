import { initialState } from '../initialState';
import { MainScreenTypes, MainScreenActions } from '../actions';

export const mainScreenReducer = (
  state = initialState,
  action: MainScreenActions,
) => {
  switch (action.type) {
    case MainScreenTypes.INCREMENT:
      return {
        value: state.value + 1,
      };
    case MainScreenTypes.DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
};
