import { MainScreenTypes, MainScreenActions } from '../actions';

const inistalState = {
  value: 0,
};

export const mainScreenReducer = (
  state = inistalState,
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
