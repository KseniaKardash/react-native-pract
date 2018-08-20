/* @flow */
import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
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

class PostsFeed extends PureComponent<Props> {

  state = {
    searchName: '',
    toggleSearch: false
  };

  filtering = (posts, query) => {
    return posts.filter((post) => {
      const userName = post.userName.toUpperCase();
      const queryData = query.toUpperCase();
      return userName.indexOf(queryData) > -1;
    });
  };

  _setToggle = () => this.setState(state => ({
    toggleSearch: !state.toggleSearch
  }));

  render() {
    let filter;
    const {posts} = this.props;
    const {searchName, toggleSearch} = this.state;
    (searchName !== '')
      ? filter = this.filtering(posts, searchName)
      : filter = posts;
    return (<View style={styles.container}>
      <View style={styles.header}>
        <ButtonIcon iconName="search" setToggle={this._setToggle}/>
        <HeaderTitle text="FEED"/>
        <ButtonIcon iconName="plus"/>
      </View>
      {
        toggleSearch
          ? (<TextInput style={styles.textInput}
            placeholder="Search"
            onChangeText={searchName => this.setState({searchName})}/>)
          : (<View/>)
      }
      <FlatList removeClippedSubviews={false}
        disableVirtualization="disableVirtualization"
        showsVerticalScrollIndicator={false}
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        data={filter}
        keyExtractor={item => item._id}
        renderItem={({item}) => <View>
          <UserPost
            userName={item.userName}
            uri={{ uri: item.uri }}
            uriPhoto={{ uri: item.uriPhoto }}/>
        </View>}/>
    </View>);
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
    paddingBottom: 0
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18
  }
});

export default PostsFeed;
