/* @flow */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextArea = () => {
  return (
    <TextInput
    underlineColorAndroid="transparent"
    multiline
    numberOfLines={4}
    style={styles.textarea}
    placeholder="Description"/>);
};

const styles = StyleSheet.create({
  textarea: {
    textAlign: 'center',
    fontSize: 20,
    height: 120,
    width: 300,
    borderRadius: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2
  }
});

export default TextArea;
