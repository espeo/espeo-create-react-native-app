import { ReturnType, reduxAsyncAction } from '@namespace/index';

export enum MainScreenTypes {
  INCREMENT = 'INCREMENT',
  INCREMENT_SUCCESS = 'INCREMENT_SUCCESS',
  INCREMENT_FAILED = 'INCREMENT_FAILED',
  DECREMENT = 'DECREMENT',
  DECREMENT_SUCCESS = 'DECREMENT_SUCCESS',
  DECREMENT_FAILED = 'DECREMENT_FAILED',
  ASYNC_INCREMENT = 'ASYNC_INCREMENT',
  ASYNC_INCREMENT_SUCCESS = 'ASYNC_INCREMENT_SUCCESS',
  ASYNC_INCREMENT_FAILED = 'ASYNC_INCREMENT_FAILED',
}

export const {
  execute: incrementValue,
  success: incrementValueSuccess,
  failed: incrementValueFailed,
} = reduxAsyncAction(MainScreenTypes.INCREMENT);

export const {
  execute: decrementValue,
  success: decrementValueSuccess,
  failed: decrementValueFailed,
} = reduxAsyncAction(MainScreenTypes.DECREMENT);

export const {
  execute: asyncIncrementValue,
  success: asyncIncrementValueSuccess,
  failed: asyncIncrementValueFailed,
} = reduxAsyncAction(MainScreenTypes.ASYNC_INCREMENT);

export type MainScreenActions =
  | ReturnType<typeof incrementValue>
  | ReturnType<typeof incrementValueSuccess>
  | ReturnType<typeof incrementValueFailed>
  | ReturnType<typeof decrementValue>
  | ReturnType<typeof decrementValueSuccess>
  | ReturnType<typeof decrementValueFailed>
  | ReturnType<typeof asyncIncrementValue>
  | ReturnType<typeof asyncIncrementValueSuccess>
  | ReturnType<typeof asyncIncrementValueFailed>;
