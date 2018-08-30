/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { connect } from "react-redux";
import ButtonIcon from "../../common/ButtonIcon";
import HeaderTitle from "../../common/HeaderTitle";
import UserPost from "../../common/UserPost";
import type { Post, Posts } from "../../../types/types";
import FadeWrapper from "../../common/FadeWrapper";
import { SHADOW_COLOR } from "../../../constants/colors";
import {
  changeSearchName,
  setToggleSearchStatus
} from "../../../actions/postsFeedAction";

type Props = {
  navigator: Object,
  searchName: string,
  toggleSearchStatus: boolean,
  changeSearchName: Function,
  setToggleSearchStatus: Function,
  posts: Posts
};

class PostsFeed extends PureComponent<Props> {
  onChangeText = (text: string) => {
    const { changeSearchName } = this.props;
    changeSearchName(text);
  };

  onShowSelectedPost = (id: string) => {
    const { posts } = this.props;
    const selectedPost = posts.find(post => {
      return post.id === id;
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

  setToggle = () => {
    const { setToggleSearchStatus, toggleSearchStatus } = this.props;
    setToggleSearchStatus(!toggleSearchStatus);
  };

  getKeyExtractor = (item: Post) => item.id;

  navigateToNextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "ImagePickerScreen",
      title: "ImagePickerScreen",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  filterPosts = (posts: Array<Post>, query: string): Array<Post> => {
    return posts.filter(post => {
      const userName = post.userName.toUpperCase();
      const queryData = query.toUpperCase();
      return userName.indexOf(queryData) !== -1;
    });
  };

  renderItem = (inboundData: { item: Post }) => {
    return (
      <FadeWrapper>
        <UserPost
          userName={inboundData.item.userName}
          uri={{ uri: inboundData.item.uri }}
          uriPhoto={{ uri: inboundData.item.uriPhoto }}
          id={inboundData.item.id}
          onShowSelectedPost={this.onShowSelectedPost}
        />
      </FadeWrapper>
    );
  };

  render() {
    const { searchName, toggleSearchStatus, posts } = this.props;
    let filteredPosts = this.filterPosts(posts, searchName);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonIcon iconName="search" onPress={this.setToggle} />
          <HeaderTitle text="FEED" />
          <ButtonIcon iconName="plus" onPress={this.navigateToNextPage} />
        </View>
        {toggleSearchStatus ? (
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={searchName}
            onChangeText={this.onChangeText}
          />
        ) : (
          <View />
        )}
        <FlatList
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={15}
          maxToRenderPerBatch={20}
          data={filteredPosts}
          windowSize={21}
          keyExtractor={this.getKeyExtractor}
          renderItem={this.renderItem}
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

const mapStateToProps = state => {
  return {
    searchName: state.postsFeed.searchName,
    toggleSearchStatus: state.postsFeed.toggleSearchStatus,
    posts: state.postsReducer.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchName: value => dispatch(changeSearchName(value)),
    setToggleSearchStatus: value => dispatch(setToggleSearchStatus(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
