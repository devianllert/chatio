import { LoadAction, ActionLoaded, ActionLoadingError } from './types';
import { LOAD_ACTION, LOAD_ACTION_SUCCESS, LOAD_ACTION_ERROR } from './constants';

const loadAction = (): LoadAction => ({
  type: LOAD_ACTION,
});

const actionLoaded = (payload: object): ActionLoaded => ({
  type: LOAD_ACTION_SUCCESS,
  payload,
});

const actionLoadingError = (payload: object): ActionLoadingError => ({
  type: LOAD_ACTION_ERROR,
  payload,
});

export { loadAction, actionLoaded, actionLoadingError };
