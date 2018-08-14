/* @flow */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  text: string
}

const СonfirmButton = (props: Props) => {
  const {text} = props;
  return (<TouchableOpacity style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#348d9d',
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
    width: 200
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default СonfirmButton;
