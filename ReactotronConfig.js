import Reactotron, { asyncStorage } from "reactotron-react-native"; // eslint-disable-line import/no-extraneous-dependencies
import { reactotronRedux } from "reactotron-redux"; // eslint-disable-line import/no-extraneous-dependencies

Reactotron.configure({
  name: "React Native Demo"
})
  .useReactNative()
  .use(reactotronRedux())
  .use(asyncStorage())
  .connect();

console.tron = Reactotron.log; // eslint-disable-line no-console
export default Reactotron;
