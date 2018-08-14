/* @flow */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import FullPost from './components/common/FullPost';

const myapp = () => {
    return (
      <View style={styles.container}>
        <FullPost likes="123" description="Fdkfiojfi gkgijf oi ijgfi" userName="Ksenia Kardash"/>
      </View>
    );
};

export default myapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myapp', () => myapp);
