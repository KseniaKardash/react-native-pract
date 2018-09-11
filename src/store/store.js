/* @flow */
import { applyMiddleware, createStore } from "redux";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import rootReducer from "../reducers/rootReducer";

const persistConfig = {
  key: "data",
  storage: storage,
  whitelist: ["profile", "postsReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  if (__DEV__) {
    const Reactotron = require("../../ReactotronConfig").default;
    return Reactotron.createStore(persistedReducer, applyMiddleware(thunk));
  } else return createStore(persistedReducer, applyMiddleware(thunk));
}
