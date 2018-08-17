/* @flow */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ButtonIcon from '../../common/ButtonIcon';
import HeaderTitle from '../../common/HeaderTitle';
import UserPost from '../../common/UserPost';
import posts from '../../../constants/testObjects';

class PostsFeed extends React.Component {
  state = {
    posts: posts
  }

  render() {
    const {posts} = this.state;
    return (<View style={styles.container}>
      <View style={styles.header}>
        <ButtonIcon iconName="search"/>
        <HeaderTitle text="FEED"/>
        <ButtonIcon iconName="plus"/>
      </View>
      <FlatList data={posts} showsVerticalScrollIndicator={false} renderItem={({item}) => <View>
          <UserPost userName={item.userName} uri={{
              uri: item.uri
            }} uriPhoto={{
              uri: item.uriPhoto
            }}/>
        </View>} keyExtractor={item => item.userName}/>
    </View>);
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default PostsFeed;
