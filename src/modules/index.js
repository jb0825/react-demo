import { combineReducers, createSlice } from "@reduxjs/toolkit";

// redux-actions -> redux-toolkit 으로 변경

const initialState = {
  token: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearStore: state => {
      return initialState;
    },
  },
});

export const { setToken, clearStore } = user.actions;
export default combineReducers({
  user: user.reducer,
});
