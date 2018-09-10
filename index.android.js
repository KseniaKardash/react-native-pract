/* @flow */
import startApp from "./src/components/screens/index/index";

if (__DEV__) {
  require("./ReactotronConfig");
}

startApp();
