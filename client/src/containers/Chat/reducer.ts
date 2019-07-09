import { Reducer } from 'redux';
import { ChatState, ChatAction } from './types';
import {
  ADD_MESSAGE,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

export const initialState: ChatState = {
  messages: [],
};

const chatReducer: Reducer<ChatState, ChatAction> = (state = initialState, action): ChatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    case LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    case LOAD_MESSAGES_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default chatReducer;
