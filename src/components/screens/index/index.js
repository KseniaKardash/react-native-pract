/* @flow */
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import Post from "../Post/Post";
import SelectPhoto from "../SelectPhoto/SelectPhoto";
import FinishPost from "../FinishPost/FinishPost";
import InfoModal from "../InfoModal/ InfoModal";
import PostsFeed from "../PostsFeed/PostsFeed";
import ImagePickerScreen from "../ImagePickerScreen/ImagePickerScreen";
import InitialScreen from "../InitialScreen/InitialScreen";
import configureStore from "../../../store/store";

const store = configureStore();

function registerScreens() {
  Navigation.registerComponent(
    "InitialScreen",
    () => InitialScreen,
    store,
    Provider
  );
  Navigation.registerComponent("ImagePickerScreen", () => ImagePickerScreen);
  Navigation.registerComponent("Post", () => Post, store, Provider);
  Navigation.registerComponent("InfoModal", () => InfoModal);
  Navigation.registerComponent("SelectPhoto", () => SelectPhoto);
  Navigation.registerComponent("FinishPost", () => FinishPost, store, Provider);
  Navigation.registerComponent("PostsFeed", () => PostsFeed, store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: "InitialScreen",
      title: "InitialScreen"
    },
    animationType: "fade"
  });
}

export default registerScreens;
