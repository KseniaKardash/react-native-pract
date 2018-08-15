/* @flow */
import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import FullPost from './src/components/common/FullPost';

const myapp = () => {
  return (
  <View style={styles.container}>
    <FullPost userName="Ksenia Kardash" likes="123" description="Some text"/>
  </View>);
};

export default myapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
