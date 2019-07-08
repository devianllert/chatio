import { combineReducers, Reducer } from 'redux';

import globalReducer from './containers/App/reducer';
import chatReducer from './containers/Chat/reducer';

const staticReducers: object = {
  global: globalReducer,
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
