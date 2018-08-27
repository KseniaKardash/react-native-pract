/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import HeaderTitle from "../../common/HeaderTitle";
import UserPost from "../../common/UserPost";
import posts from "../../../constants/testObjects";
import type { Post } from "../../../types/types";
import FadeWrapper from "../../common/FadeWrapper";
import { SHADOW_COLOR } from "../../../constants/colors";

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

  _onChangeText = (text: string) => {
    this.setState({ searchName: text });
  };

  _setToggle = () => {
    this.setState(prevState => {
      return { toggleSearch: !prevState.toggleSearch };
    });
  };

  filtering = (posts: Array<Post>, query: string): Array<Post> => {
    return posts.filter(post => {
      const userName = post.userName.toUpperCase();
      const queryData = query.toUpperCase();
      return userName.indexOf(queryData) > -1;
    });
  };

  _keyExtractor = (item: Posts) => item._id;

  _renderItem = (inboundData: { item: Post }) => {
    return (
      <FadeWrapper>
        <UserPost
          userName={inboundData.item.userName}
          uri={{ uri: inboundData.item.uri }}
          uriPhoto={{ uri: inboundData.item.uriPhoto }}
          _id={inboundData.item._id}
          _showSelectedPost={this._showSelectedPost}
        />
      </FadeWrapper>
    );
  };

  _showSelectedPost = (_id: string) => {
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
      screen: "ImagePickerScreen",
      title: "ImagePickerScreen",
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
          renderItem={this._renderItem}
          style={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 20,
    paddingTop: 10,
    backgroundColor: SHADOW_COLOR
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18
  },
  flatList: {
    width: "100%"
  }
});

export default PostsFeed;
