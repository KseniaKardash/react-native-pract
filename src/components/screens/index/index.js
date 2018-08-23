/* @flow */
import { Navigation } from "react-native-navigation";
import Post from "../Post/Post";
import SelectPhoto from "../SelectPhoto/SelectPhoto";
import FinishPost from "../FinishPost/FinishPost";
import InfoModal from "../InfoModal/ InfoModal";
import PostsFeed from "../PostsFeed/PostsFeed";

function registerScreens() {
  Navigation.registerComponent("Post", () => Post);
  Navigation.registerComponent("InfoModal", () => InfoModal);
  Navigation.registerComponent("SelectPhoto", () => SelectPhoto);
  Navigation.registerComponent("FinishPost", () => FinishPost);
  Navigation.registerComponent("PostsFeed", () => PostsFeed);

  Navigation.startSingleScreenApp({
    screen: {
      screen: "PostsFeed",
      title: "PostsFeed"
    },
    animationType: "fade"
  });
}

export default registerScreens;
