export interface LoadAction {
  type: 'LOAD_ACTION';
}

export interface ActionLoaded {
  type: 'LOAD_ACTION_SUCCESS';
  payload: object;
}

export interface ActionLoadingError {
  type: 'LOAD_ACTION_ERROR';
  payload: object;
}
