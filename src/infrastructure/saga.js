import {
  call,
  put,
  takeEvery
} from "redux-saga/effects";

import * as api from "./api";
import * as types from "./types";

const loginFetch = function* loginFetch(action) {
  try {
    yield call(api.postUser, action.info);
    yield put({type: types.DONE_LOGIN_FETCH, info: action.info});
  }catch (e){
    console.error(`fetchUser failed: ${e.message}`);
  }
}

const saga = function*() {
  yield takeEvery(types.BEGIN_LOGIN_FETCH, loginFetch);
};

export default saga;

