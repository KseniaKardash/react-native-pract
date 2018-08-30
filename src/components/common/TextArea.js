/* @flow */
import React from "react";
import { TextInput, StyleSheet } from "react-native";

type Props = {
  onChangeText: Function
};
const TextArea = (props: Props) => {
  const { onChangeText } = props;
  return (
    <TextInput
      underlineColorAndroid="transparent"
      multiline
      numberOfLines={4}
      style={styles.textarea}
      placeholder="Description"
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  textarea: {
    textAlign: "center",
    fontSize: 20,
    height: 120,
    width: 300,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2
  }
});

export default TextArea;
