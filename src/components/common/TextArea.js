/* @flow */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type Props = {
  value: string
}

const TextArea = (props: Props) => {
  const {value} = props;
  return (
    <TextInput
    underlineColorAndroid="transparent"
    multiline
    numberOfLines={4}
    value={value}
    style={styles.textarea}
    placeholder="Description"/>);
};

const styles = StyleSheet.create({
  textarea: {
    textAlign: 'center',
    fontSize: 20,
    borderColor: '#757575',
    borderWidth: 1,
    height: 120,
    width: 300,
    borderRadius: 5,
    margin: 10
  }
});

export default TextArea;
