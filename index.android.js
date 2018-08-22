/* @flow */
import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import PostsFeed from "./src/components/screens/PostsFeed/PostsFeed";
import posts from "./src/constants/testObjects";

const myapp = () => {
  return (
    <View style={styles.container}>
      <PostsFeed posts={posts} />
    </View>
  );
};

export default myapp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("myapp", () => myapp);
