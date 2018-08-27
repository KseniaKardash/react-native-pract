/* @flow */
import React from "react";
import { Text, StyleSheet } from "react-native";
import { HEADER_TEXT_COLOR } from "../../constants/colors";

type Props = {
  text: string
};

const HeaderTitle = (props: Props) => {
  const { text } = props;
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: HEADER_TEXT_COLOR,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    marginTop: 10
  }
});

export default HeaderTitle;
