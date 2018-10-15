/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { SharedElementTransition } from "react-native-navigation";
import ButtonIcon from "../../common/ButtonIcon";
import FullPost from "../../common/FullPost";
import HeaderTitle from "../../common/HeaderTitle";
import type { Post } from "../../../types/types";
import { SHADOW_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  post: Post,
  userId: number,
  deletePost: Function
};

class FinishPost extends PureComponent<Props> {
  navigateToPreviousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };
  deletePost = () => {
    const { deletePost, post, userId } = this.props;
    deletePost(userId, post.id);
  };

  render() {
    const { post } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header}>
            <ButtonIcon
              iconName="chevron-left"
              onPress={this.navigateToPreviousPage}
            />
            <HeaderTitle text="POST" />
            <ButtonIcon iconName="minus" onPress={this.deletePost} />
          </View>
        </View>
        <SharedElementTransition
          style={styles.sharedElement}
          sharedElementId="SharedPost"
          showDuration={300}
          hideDuration={300}
          showInterpolation={{
            type: "linear",
            easing: "FastOutSlowIn"
          }}
          hideInterpolation={{
            type: "linear",
            easing: "FastOutSlowIn"
          }}
        >
          <FullPost
            userName={post.userName}
            likes={post.likes}
            tag={post.tag}
            description={post.description}
            uri={{ uri: post.uri }}
            uriPhoto={{ uri: post.uriPhoto }}
          />
        </SharedElementTransition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: SHADOW_COLOR,
    alignItems: "center",
    padding: 20,
    paddingTop: 10
  },
  sharedElement: {
    width: "100%"
  },
  header: {
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  }
});

export default FinishPost;
