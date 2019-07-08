export interface Message {
  author: string;
  message: string;
}

export interface ChatState {
  messages: Message[];
}

export type ChatAction = AddMessage | LoadMessages | LoadMessagesSuccess | LoadMessagesError;

export interface AddMessage {
  type: 'ADD_MESSAGE';
  payload: Message;
}
export interface LoadMessages {
  type: 'LOAD_MESSAGES';
  payload: Message[];
}

export interface LoadMessagesSuccess {
  type: 'LOAD_MESSAGES_SUCCESS';
  payload: Message[];
}

export interface LoadMessagesError {
  type: 'LOAD_MESSAGES_ERROR';
  payload: Error;
}
