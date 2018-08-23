/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import HeaderTitle from "../../common/HeaderTitle";
import UserPost from "../../common/UserPost";
import posts from "../../../constants/testObjects";
import type Post from "../../../types/types";

type Props = {
  navigator: Object
};

type State = {
  searchName: string,
  toggleSearch: boolean
};

class PostsFeed extends PureComponent<Props, State> {
  state: State = {
    searchName: "",
    toggleSearch: false
  };

  filtering = (posts: Array<Post>, query: string): Array<Post> => {
    return posts.filter(post => {
      const userName = post.userName.toUpperCase();
      const queryData = query.toUpperCase();
      return userName.indexOf(queryData) > -1;
    });
  };

  _setToggle = () => {
    this.setState(prevState => {
      return { toggleSearch: !prevState.toggleSearch };
    });
  };

  _showSelectedPost = _id => {
    const selectedPost = posts.find(post => {
      return post._id === _id;
    });
    const { navigator } = this.props;
    navigator.push({
      screen: "Post",
      title: selectedPost.userName,
      passProps: {
        post: selectedPost
      },
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  _nextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "SelectPhoto",
      title: "SelectPhoto",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  _keyExtractor = (item: Post) => item._id;

  _onChangeText = (text: string) => {
    this.setState({ searchName: text });
  };

  render() {
    let filter;
    const { searchName, toggleSearch } = this.state;
    searchName !== ""
      ? (filter = this.filtering(posts, searchName))
      : (filter = posts);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonIcon iconName="search" onPress={this._setToggle} />
          <HeaderTitle text="FEED" />
          <ButtonIcon iconName="plus" onPress={this._nextPage} />
        </View>
        {toggleSearch ? (
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={searchName}
            onChangeText={this._onChangeText}
          />
        ) : (
          <View />
        )}
        <FlatList
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={15}
          maxToRenderPerBatch={20}
          data={filter}
          windowSize={21}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <View>
              <UserPost
                userName={item.userName}
                uri={{ uri: item.uri }}
                uriPhoto={{ uri: item.uriPhoto }}
                onPress={() => this._showSelectedPost(item._id)}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18
  }
});

export default PostsFeed;
