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
  _showSelectedPost?: Function,
  _id?: string
};

const UserPost = (props: Props) => {
  const { uri, uriPhoto, children, userName, _showSelectedPost, _id } = props;

  const onUserPostsPress = () => {
    if (_showSelectedPost) _showSelectedPost(_id);
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  imgSmall: {
    width: "100%",
    height: 200,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: BACKGROUND_COLOR,
    alignSelf: "center"
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: BACKGROUND_COLOR,
    marginBottom: 10,
    margin: 3,
    marginRight: 5,
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
