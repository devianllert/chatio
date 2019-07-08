import {
  LoadMessages,
  LoadMessagesError,
  LoadMessagesSuccess,
  AddMessage,
  Message,
} from './types';
import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
  ADD_MESSAGE,
} from './constants';

const addMessage = (message: Message): AddMessage => ({
  type: ADD_MESSAGE,
  payload: message,
});

const loadMessages = (messages: Message[]): LoadMessages => ({
  type: LOAD_MESSAGES,
  payload: messages,
});

const loadMessagesSuccess = (messages: Message[]): LoadMessagesSuccess => ({
  type: LOAD_MESSAGES_SUCCESS,
  payload: messages,
});

const loadMessagesError = (error: Error): LoadMessagesError => ({
  type: LOAD_MESSAGES_ERROR,
  payload: error,
});

export {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesError,
  addMessage,
};
