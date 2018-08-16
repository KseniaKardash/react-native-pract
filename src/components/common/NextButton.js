/* @flow */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const NextButton = () => {
  return (
  <TouchableOpacity style={styles.button}>
    <Image style={styles.img} source={require('../../assets/img/next.png')}/>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  },
  button: {
    padding: 5
  }
});

export default NextButton;
