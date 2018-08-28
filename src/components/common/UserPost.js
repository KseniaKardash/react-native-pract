/* @flow */
import React from "react";
import type { Node } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import type { Uri } from "../../types/types";
import UserInfo from "./UserInfo";
import { BACKGROUND_COLOR, BORDER_SHADOW_COLOR } from "../../constants/colors";

type Props = {
  uri: Uri,
  uriPhoto: Uri,
  children?: Node,
  userName: string,
  onShowSelectedPost?: Function,
  _id?: string
};

const UserPost = (props: Props) => {
  const { uri, uriPhoto, children, userName, onShowSelectedPost, _id } = props;

  const onUserPostsPress = () => {
    if (onShowSelectedPost) onShowSelectedPost(_id);
  };

  return (
    <View style={styles.container}>
      <UserInfo userName={userName} uriPhoto={uriPhoto} />
      {children ? (
        <Image style={styles.imgFull} source={uri} />
      ) : (
        <TouchableHighlight style={styles.touch} onPress={onUserPostsPress}>
          <Image style={styles.imgSmall} source={uri} />
        </TouchableHighlight>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  imgFull: {
    height: 300,
    width: "100%",
    marginHorizontal: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  imgSmall: {
    height: 200,
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
    alignSelf: "center"
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: BACKGROUND_COLOR,
    marginBottom: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    borderRadius: 5,
    shadowColor: BORDER_SHADOW_COLOR,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  },
  text: {
    fontSize: 18
  }
});

export default UserPost;
