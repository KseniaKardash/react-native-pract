/* @flow */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export default function configureStore() {
  if (__DEV__) {
    const Reactotron = require("../../ReactotronConfig").default;
    return Reactotron.createStore(rootReducer, applyMiddleware(thunk));
  } else return createStore(rootReducer, applyMiddleware(thunk));
}
