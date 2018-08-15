/* @flow */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type Props = {
  value: string
}
const TagInput = (props: Props) => {
  const {value} = props;
  return (
  <TextInput
    underlineColorAndroid="transparent"
    multiline
    value={value}
    style={styles.taginput}
    placeholder="Tag"/>);
};

const styles = StyleSheet.create({
  taginput: {
    textAlign: 'center',
    fontSize: 20,
    borderColor: '#757575',
    borderWidth: 1,
    height: 60,
    width: 150,
    borderRadius: 5,
    margin: 10
  }
});

export default TagInput;
