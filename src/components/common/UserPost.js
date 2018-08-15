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
    <Image style={styles.img} source={uri}/>
    {children}
  </View>);
};

const styles = StyleSheet.create({
  img: {
    width: 320,
    height: 320,
    margin: 10
    },
  container: {
    display: 'flex',
    padding: 8,
    paddingTop: 15,
    flexDirection: 'column',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 18
  }
});

export default UserPost;
