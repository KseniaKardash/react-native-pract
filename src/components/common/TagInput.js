/* @flow */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TagInput = () => {
  return (
  <TextInput
    underlineColorAndroid="transparent"
    multiline
    style={styles.taginput}
    placeholder="Tag"/>);
};

const styles = StyleSheet.create({
  taginput: {
    textAlign: 'center',
    fontSize: 20,
    height: 60,
    width: 150,
    borderRadius: 5,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2
  }
});

export default TagInput;
