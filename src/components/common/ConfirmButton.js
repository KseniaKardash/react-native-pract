/* @flow */
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT_COLORS } from "../../constants/colors";

type Props = {
  text: string,
  onPress: Function
};

const СonfirmButton = (props: Props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    alignItems: "center"
  },
  button: {
    height: 48,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
    fontSize: 18
  }
});

export default СonfirmButton;
