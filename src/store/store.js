/* @flow */
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../../ReactotronConfig";
import rootReducer from "../reducers/rootReducer";

export default function configureStore() {
  return Reactotron.createStore(rootReducer, applyMiddleware(thunk));
}
