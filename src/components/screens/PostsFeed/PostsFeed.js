/* @flow */
import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ButtonIcon from '../../common/ButtonIcon';
import HeaderTitle from '../../common/HeaderTitle';
import UserPost from '../../common/UserPost';

type Props = {
  posts: Array<Posts>
}

type Posts = {
  uri: string,
  uriPhoto: string,
  userName: string
}

class PostsFeed extends PureComponent<Props>{
  render(){
      const {posts} = this.props;
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonIcon iconName="search"/>
        <HeaderTitle text="FEED"/>
        <ButtonIcon iconName="plus"/>
      </View>
      <FlatList
        removeClippedSubviews={false}
        disableVirtualization
        showsVerticalScrollIndicator={false}
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        data={posts}
        keyExtractor={item => item._id}
        renderItem={({item}) =>
        <View>
          <UserPost userName={item.userName} uri={{
              uri: item.uri
            }} uriPhoto={{
              uri: item.uriPhoto
            }}/>
        </View>}/>
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
