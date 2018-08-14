/* @flow */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import UserPost from './UserPost';

type Props = {
  likes: string,
  description: string,
  userName: string
};

const FullPost = (props: Props) => {
  const {likes, description, userName} = props;
  return (<View style={styles.container}>
    <UserPost uri={{
        uri: 'https://i.pinimg.com/564x/ee/bd/23/eebd23a588c8199faa099124ba5f099f.jpg'
      }} userName={userName}>
      <View style={styles.likes}>
        <Image style={styles.img} source={require('../../img/likes.png')}/>
        <Text style={styles.text}>
          {likes}
        </Text>
      </View>
      <Text style={styles.description}>Description: {description}</Text>
    </UserPost>
  </View>);
};

const styles = StyleSheet.create({
  img: {
    width: 27,
    height: 27,
    marginLeft: 10,
    marginRight: 3,
    marginTop: 3
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  description: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16
  }
});

export default FullPost;
