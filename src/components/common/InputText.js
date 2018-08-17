/* @flow */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputText = () => {
  return (
  <TextInput
    underlineColorAndroid="transparent"
    style={styles.taginput}
    placeholder="Tag"/>
  );
};

const styles = StyleSheet.create({
  taginput: {
    textAlign: 'center',
    fontSize: 20,
    height: 60,
    flex: 1,
    marginLeft: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2
  }
});

export default InputText;
