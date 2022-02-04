import { combineReducers } from "@reduxjs/toolkit";
import { createAction, handleActions } from "redux-actions";

const SET_TOKEN = "/users/setToken";
const CLEAR_STORE = "/clearStore";

const initialState = {
  token: null,
};

export const setToken = createAction(SET_TOKEN);
export const clearStore = createAction(CLEAR_STORE);

const userReducer = handleActions(
  {
    [SET_TOKEN]: (state, action) => {
      console.log(`changed store: ${JSON.stringify({ ...state, token: action.payload })}`);
      return { ...state, token: action.payload };
    },
    [CLEAR_STORE]: () => {
      console.log("store clear!");
      return initialState;
    },
  },
  initialState
);

export default combineReducers({
  users: userReducer,
});
