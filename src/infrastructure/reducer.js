import * as types from "./types";
import cloneDeep from "clone-deep";

const reducers = {
  [types.COUNT_UP](old_state, action){
    const state = cloneDeep(old_state);
    state.count++;
    return state;
  },
};

const reducer = (old_state, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](old_state, action)
    : old_state;

export default reducer;

