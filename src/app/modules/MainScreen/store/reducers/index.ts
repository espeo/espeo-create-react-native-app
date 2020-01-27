import { reduxAsyncReducer } from '@namespace/index';
import { MainScreenTypes, MainScreenActions } from '../actions';

export interface MainScreenState {
  value: number;
  isLoading: boolean;
  isSuccess: boolean;
  error: boolean;
}

export const initialState: MainScreenState = {
  value: 0,
  isLoading: false,
  isSuccess: false,
  error: false,
};

const {
  DECREMENT,
  DECREMENT_SUCCESS,
  DECREMENT_FAILED,
  INCREMENT,
  INCREMENT_SUCCESS,
  INCREMENT_FAILED,
} = MainScreenTypes;

export const mainScreenReducer = (
  state = initialState,
  action: MainScreenActions,
) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return {
        value: state.value + 1,
        isLoading: false,
        isSuccess: true,
        error: false,
      };
    case DECREMENT_SUCCESS:
      return {
        value: state.value - 1,
        isLoading: false,
        isSuccess: true,
        error: false,
      };
    case INCREMENT:
    case INCREMENT_FAILED:
      return reduxAsyncReducer<MainScreenActions, MainScreenState>(
        MainScreenTypes.INCREMENT,
        action,
        state,
      );
    case DECREMENT:
    case DECREMENT_FAILED:
      return reduxAsyncReducer<MainScreenActions, MainScreenState>(
        MainScreenTypes.DECREMENT,
        action,
        state,
      );
    default:
      return reduxAsyncReducer<MainScreenActions, MainScreenState>(
        MainScreenTypes.ASYNC_INCREMENT,
        action,
        state,
      );
  }
};
