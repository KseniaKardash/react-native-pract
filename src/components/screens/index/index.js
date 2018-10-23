/* @flow */
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import SelectPhoto from "../SelectPhoto/SelectPhoto";
import InfoModal from "../InfoModal/InfoModal";
import ImagePickerScreen from "../ImagePickerScreen/ImagePickerScreen";
import configureStore from "../../../store/store";
import PostsFeedContainer from "../../../containers/PostsFeedContainer";
import FinishPostContainer from "../../../containers/FinishPostContainer";
import PostContainer from "../../../containers/PostContainer";
import InitialScreenContainer from "../../../containers/InitialScreenContainer";
import UserProfileContainer from "../../../containers/UserProfileContainer";

export const store = configureStore();

export function registerScreens() {
  Navigation.registerComponent(
    "InitialScreen",
    () => InitialScreenContainer,
    store,
    Provider
  );
  Navigation.registerComponent("ImagePickerScreen", () => ImagePickerScreen);
  Navigation.registerComponent("Post", () => PostContainer, store, Provider);
  Navigation.registerComponent(
    "UserProfile",
    () => UserProfileContainer,
    store,
    Provider
  );
  Navigation.registerComponent("InfoModal", () => InfoModal);
  Navigation.registerComponent("SelectPhoto", () => SelectPhoto);
  Navigation.registerComponent(
    "FinishPost",
    () => FinishPostContainer,
    store,
    Provider
  );
  Navigation.registerComponent(
    "PostsFeed",
    () => PostsFeedContainer,
    store,
    Provider
  );

  Navigation.startSingleScreenApp({
    screen: {
      screen: "InitialScreen",
      title: "InitialScreen"
    },
    animationType: "fade"
  });
}
function startApp() {
  persistStore(store, null, () => {
    registerScreens();
  });
}
export default startApp;
