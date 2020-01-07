import { ReturnType } from '../../../../namespace';

export enum MainScreenTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  ASYNC_INCREMENT = 'ASYNC_INCREMENT',
}

export const incrementValue = () =>
  ({
    type: MainScreenTypes.INCREMENT,
  } as const);

export const decrementValue = () =>
  ({
    type: MainScreenTypes.DECREMENT,
  } as const);

export const incrementAsyncValue = () =>
  ({
    type: MainScreenTypes.ASYNC_INCREMENT,
  } as const);

export type MainScreenActions =
  | ReturnType<typeof incrementValue>
  | ReturnType<typeof decrementValue>
  | ReturnType<typeof incrementAsyncValue>;
