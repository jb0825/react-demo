import { combineReducers } from "@reduxjs/toolkit";
import { createAction, handleActions } from "redux-actions";

const SET_TOKEN = "/users/setToken";
const SET_USERS = "/users/setUsers";
const CLEAR_STORE = "/clearStore";

const initialState = {
  token: null,
  users: [],
};

export const setToken = createAction(SET_TOKEN);
export const setUsers = createAction(SET_USERS);
export const clearStore = createAction(CLEAR_STORE);

const userReducer = handleActions(
  {
    [SET_TOKEN]: (state, action) => {
      return { ...state, token: action.payload };
    },
    [SET_USERS]: (state, action) => {
      return { ...state, users: action.payload };
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
