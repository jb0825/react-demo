import { createAction, handleActions } from "redux-actions";

const SET_TOKEN = "/users/setToken";
const initialState = ({
    token: null
});

export const setToken = createAction(SET_TOKEN);

export default handleActions({
    [SET_TOKEN]: (state, action) => {
        return { token: action.token }
    }
}, initialState);