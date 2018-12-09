import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialState from "./initialState";
import infra_reducer from "infrastructure/reducer";
import saga from "infrastructure/saga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'store',
  storage,
};
const persistedReducer = persistReducer(persistConfig, infra_reducer)

export const store = createStore(persistedReducer, initialState, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store)

sagaMiddleware.run(saga)

