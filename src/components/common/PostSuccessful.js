/* @flow */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ConfirmButton from './ConfirmButton';

type Props = {
  titlePost: string,
  textPost: string
};

const PostSuccesful = (props: Props) => {
  const {titlePost, textPost} = props;
  return (
  <View style={styles.container}>
    <Text style={styles.titlePost}>{titlePost}</Text>
    <Text style={styles.textPost}>{textPost}</Text>
    <ConfirmButton text="DONE"/>
  </View>);
};

const styles = StyleSheet.create({
  titlePost: {
    color: '#ed569b',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
    // fontFamily: 'Caviar_Dreams_Bold'
    },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    height: 300,
    padding: 30,
    margin: 10,
    borderRadius: 5,
    elevation: 8,
  },
  textPost: {
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center'
  }
});

export default PostSuccesful;
