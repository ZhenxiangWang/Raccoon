import * as t from "./actionTypes";

export const initialize = () => async (dispatch) => {
  dispatch({ type: t.APP_INITIALIZING });

  // Initialize the app. Load data or do the authentication.

  dispatch({ type: t.APP_INITIALIZED });
};
