import { combineReducers, Reducer } from 'redux';

import globalReducer from './containers/App/reducer';
import TrackerReducer from './containers/Tracker/reducer';

const staticReducers: object = {
  global: globalReducer,
  tracker: TrackerReducer,
};

const createReducer = (injectedReducers = {}): Reducer => {
  const rootReducer: Reducer = combineReducers({
    ...staticReducers,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
