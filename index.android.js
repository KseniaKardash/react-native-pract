/* @flow */
import { registerScreens } from "./src/components/screens/index/index";

if (__DEV__) {
  require("./ReactotronConfig");
}

registerScreens();
