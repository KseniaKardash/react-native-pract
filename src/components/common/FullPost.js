/* @flow */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UserPost from "./UserPost";
import { MAIN_COLOR } from "../../constants/colors";

type uri = {
  uri: string
};

type Props = {
  uri: uri,
  likes: string,
  description: string,
  userName: string,
  uriPhoto: uri
};

const FullPost = (props: Props) => {
  const { likes, description, userName, uri, uriPhoto } = props;
  return (
    <View style={styles.container}>
      <UserPost uri={uri} userName={userName} uriPhoto={uriPhoto}>
        <View style={styles.likes}>
          <TouchableOpacity style={styles.like}>
            <Icon name="heart" color={MAIN_COLOR} size={27} />
          </TouchableOpacity>
          <Text style={styles.text}>{likes}</Text>
        </View>
        <Text style={styles.description}>Description: {description}</Text>
      </UserPost>
    </View>
  );
};

const styles = StyleSheet.create({
  like: {
    marginLeft: 10,
    marginRight: 3,
    marginTop: 3
  },
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  text: {
    fontSize: 17,
    fontWeight: "bold"
  },
  likes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16
  }
});

export default FullPost;
