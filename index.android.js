/* @flow */
import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import PrimitivesTestScreen from './src/components/screens/PrimitivesTestScreen/PrimitivesTestScreen';
import FinishPost from './src/components/screens/FinishPost/FinishPost';
import InfoModal from './src/components/screens/InfoModal/ InfoModal';
import SelectPhoto from './src/components/screens/SelectPhoto/SelectPhoto';
import Post from './src/components/screens/Post/Post';
import PostsFeed from './src/components/screens/PostsFeed/PostsFeed';

const myapp = () => {
  return (
  <View style={styles.container}>
    <PostsFeed/>
    {/* <PrimitivesTestScreen/> */}
    {/* <FinishPost/> */}
    {/* <InfoModal/> */}
    {/* <Post/> */}
    {/* <SelectPhoto/> */}
  </View>
);};

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
