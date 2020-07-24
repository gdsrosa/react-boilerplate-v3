import { GreetAction } from './types';

const Types = {
  SET_MESSAGE: '@greet/SET_MESSAGE',
};

const initialState = {
  message: null,
};

export const greetReducer = (state = initialState, action: GreetAction) => {
  switch (action.type) {
    case Types.SET_MESSAGE:
      const { message } = action.payload;
      return { ...state, message };
    default:
      return { ...state };
  }
};

export const handleSetMessage = (message: string) => {
  return {
    type: Types.SET_MESSAGE,
    payload: { message },
  };
};
