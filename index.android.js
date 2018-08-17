/* @flow */
import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import PrimitivesTestScreen from './src/components/screens/PrimitivesTestScreen/PrimitivesTestScreen';

const myapp = () => {
  return (
  <View style={styles.container}>
    <PrimitivesTestScreen/>
  </View>);
};

export default myapp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
