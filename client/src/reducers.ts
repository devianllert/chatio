import { combineReducers, Reducer } from 'redux';

import chatReducer from './containers/Chat/reducer';

const staticReducers: object = {
  chat: chatReducer,
};

const createReducer = (injectedReducers = {}): Reducer => {
  const rootReducer: Reducer = combineReducers({
    ...staticReducers,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
