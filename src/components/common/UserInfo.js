/* @flow */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type Props = {
  userName: string
};

const UserInfo = (props: Props) => {
  const {userName} = props;
  return (
  <View style={styles.container}>
    <Image style={styles.img} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
    <Text style={styles.userName}>{userName}</Text>
  </View>);
};

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10
    },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  userName: {
    fontSize: 18,
    // fontFamily: 'Caviar_Dreams_Bold'
  }
});

export default UserInfo;
