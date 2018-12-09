import * as types from "./types";
import cloneDeep from "clone-deep";

const reducers = {
  [types.BEGIN_LOGIN_FETCH](old_state, action){
    const state = cloneDeep(old_state);
    state.login.fetching = true;
    return state;
  },
  [types.DONE_LOGIN_FETCH](old_state, action){
    const state = cloneDeep(old_state);
    state.login.info = action.info;
    state.login.fetching = false;
    return state;
  },
  [types.LOGOUT](old_state, action){
    const state = cloneDeep(old_state);
    state.login.info = null;
    return state;
  },
};

const reducer = (old_state, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](old_state, action)
    : old_state;

export default reducer;

