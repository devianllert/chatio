interface AppState {
  loading: boolean;
  error: boolean;
}

interface Action {
  type: string;
  payload: string | number | object;
}

export const initialState: AppState = {
  loading: false,
  error: false,
};

const appReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
