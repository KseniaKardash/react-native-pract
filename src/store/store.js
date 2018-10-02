/* @flow */
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware, thunk];
  if (__DEV__) {
    const Reactotron = require("../../ReactotronConfig").default;
    const store = Reactotron.createStore(
      rootReducer,
      applyMiddleware(...middlewares)
    );
    sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
  }
}
