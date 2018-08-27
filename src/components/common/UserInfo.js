/* @flow */
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  userName: string,
  uriPhoto: uri
};

type uri = {
  uri: string
};

const UserInfo = (props: Props) => {
  const { userName, uriPhoto } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={uriPhoto} />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10
  },
  userName: {
    fontSize: 18
  }
});

export default UserInfo;
