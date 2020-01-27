const generateNames = (actionName: string) => {
  const ACTION = actionName;
  const SUCCESS = `${actionName}_SUCCESS`;
  const FAILED = `${actionName}_FAILED`;

  return { ACTION, SUCCESS, FAILED };
};

export const reduxAsyncAction = (actionName: string) => {
  const { ACTION, SUCCESS, FAILED } = generateNames(actionName);
  return {
    execute: (dataAction?: any) => {
      return {
        type: ACTION,
        payload: dataAction,
      };
    },
    success: (data?: any) => {
      return {
        type: SUCCESS,
        payload: data,
      };
    },
    failed: (errorText: any) => {
      return {
        type: FAILED,
        payload: errorText,
      };
    },
  };
};

export const reduxAsyncReducer = <A extends { payload?: any; type: string }, S>(
  actionName: string,
  action: A,
  defaultState: S,
): S => {
  const { ACTION, SUCCESS, FAILED } = generateNames(actionName);
  const state = defaultState;
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        ...{
          isLoading: true,
          error: false,
          isSuccess: false,
        },
      };
    case SUCCESS:
      return {
        ...state,
        ...{
          isLoading: false,
          isSuccess: true,
          data: action.payload,
        },
      };
    case FAILED:
      return {
        ...state,
        ...{
          error: action.payload,
          isLoading: false,
          isSuccess: false,
        },
      };
    default:
      return state;
  }
};
