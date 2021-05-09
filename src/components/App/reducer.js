import * as t from "./actionTypes";

const initialState = {
  initialized: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.APP_INITIALIZING:
      return { ...state, initialized: false };
    case t.APP_INITIALIZED:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
export default AppReducer;
