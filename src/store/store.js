/* @flow */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../../ReactotronConfig";
import rootReducer from "../reducers/rootReducer";

export default function configureStore() {
  if (__DEV__) {
    return Reactotron.createStore(rootReducer, applyMiddleware(thunk));
  } else return createStore(rootReducer, applyMiddleware(thunk));
}
