/* @flow */
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import storage from "redux-persist/es/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "dataApp",
  storage: storage,
  whitelist: ["authenticationReducer"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const middlewares = [sagaMiddleware, thunk];
  if (__DEV__) {
    const Reactotron = require("../../ReactotronConfig").default;
    const store = Reactotron.createStore(
      persistedReducer,
      applyMiddleware(...middlewares)
    );
    sagaMiddleware.run(rootSaga);
    return store;
  } else {
    const store = createStore(
      persistedReducer,
      applyMiddleware(...middlewares)
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }
}
