/* @flow */
import React from 'react';
import type {Node} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import UserInfo from './UserInfo';

type Props = {
  uri: uri,
  children: Node,
  userName: string
};

type uri = {
  uri: string
}

const UserPost = (props: Props) => {
  const {uri, children, userName} = props;

  return (
  <View style={styles.container}>
    <UserInfo userName={userName}/>
    {children ? (
      <Image style={styles.imgFull} source={uri}/>
    ) : (
      <Image style={styles.imgSmall} source={uri}/>)}
    {children}
  </View>);
};

const styles = StyleSheet.create({
  imgFull: {
    width: 320,
    height: 320,
    margin: 10
    },
    imgSmall: {
      width: 320,
      height: 200,
      margin: 10
      },
  container: {
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    padding: 8,
    paddingTop: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  },
  text: {
    fontSize: 18
  }
});

export default UserPost;
