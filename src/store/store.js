import { createStore } from "redux";
import initialState from "./initialState";
import infra_reducer from "infrastructure/reducer";

const store = createStore(infra_reducer, initialState);

export default store;

