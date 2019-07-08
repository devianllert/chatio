import { ChatState, ChatAction } from './types';

export const initialState: ChatState = {
  messages: [],
};

const chatReducer = (state = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
