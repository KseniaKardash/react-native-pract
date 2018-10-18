/* @flow */
import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
  NetInfo,
  Alert
} from "react-native";
import { SharedElementTransition } from "react-native-navigation";
import ButtonIcon from "../../common/ButtonIcon";
import HeaderTitle from "../../common/HeaderTitle";
import UserPost from "../../common/UserPost";
import type { Post, Posts, User } from "../../../types/types";
import FadeWrapper from "../../common/FadeWrapper";
import { SHADOW_COLOR, MAIN_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  searchName: string,
  currentUser: User,
  userId: number,
  toggleSearchStatus: boolean,
  setToggleSearchStatus: Function,
  filterPostsByUserName: Function,
  requestPosts: Function,
  posts: Posts,
  fetching: boolean
};

class PostsFeed extends PureComponent<Props> {
  componentDidMount() {
    const { requestPosts, userId, posts, currentUser } = this.props;
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        if (
          posts.length == 0 ||
          posts[0].userName !== currentUser.userInfo.name
        ) {
          requestPosts(userId);
        }
      } else Alert.alert("There is no Internet connection.");
    });
    if (posts.length == 0 || posts[0].userName !== currentUser.userInfo.name) {
      requestPosts(userId);
    }
  }

  onChangeText = (text: string) => {
    const { filterPostsByUserName, userId } = this.props;
    filterPostsByUserName(userId, text);
  };

  onShowSelectedPost = (id: string) => {
    const { posts, navigator } = this.props;
    const selectedPost = posts.find(post => {
      return post.id === id;
    });
    navigator.push({
      screen: "Post",
      title: selectedPost ? selectedPost.userName : "",
      sharedElements: [`SharedPost${selectedPost.id}`],
      passProps: {
        post: selectedPost
      },
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  onRefresh = async () => {
    const { requestPosts, userId } = this.props;
    const internetConnectionStatus = await NetInfo.isConnected.fetch();
    if (internetConnectionStatus) {
      requestPosts(userId);
    } else Alert.alert("There is no Internet connection.");
  };

  setToggle = () => {
    const { setToggleSearchStatus, toggleSearchStatus } = this.props;
    setToggleSearchStatus(!toggleSearchStatus);
  };

  getKeyExtractor = (item: Post) => item.id.toString();

  navigateToNextPage = () => {
    const { navigator, setToggleSearchStatus, toggleSearchStatus } = this.props;
    navigator.push({
      screen: "ImagePickerScreen",
      title: "ImagePickerScreen",
      backButtonHidden: true,
      animated: true,
      animationType: "none"
    });
    if (toggleSearchStatus) {
      setToggleSearchStatus(!toggleSearchStatus);
    }
  };

  renderItem = (inboundData: { item: Post }) => {
    return (
      <SharedElementTransition
        sharedElementId={`SharedPost${inboundData.item.id}`}
      >
        <FadeWrapper>
          <UserPost
            userName={inboundData.item.userName}
            uri={{ uri: inboundData.item.uri }}
            uriPhoto={{ uri: inboundData.item.uriPhoto }}
            id={inboundData.item.id}
            onShowSelectedPost={this.onShowSelectedPost}
          />
        </FadeWrapper>
      </SharedElementTransition>
    );
  };

  render() {
    const { searchName, toggleSearchStatus, posts, fetching } = this.props;
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
        {fetching ? (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color={MAIN_COLOR}
          />
        ) : (
          <FlatList
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            initialNumToRender={15}
            maxToRenderPerBatch={20}
            data={posts}
            windowSize={21}
            keyExtractor={this.getKeyExtractor}
            renderItem={this.renderItem}
            style={styles.flatList}
            refreshing={fetching}
            onRefresh={this.onRefresh}
          />
        )}
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
  loader: {
    paddingTop: 200
  },
  header: {
    display: "flex",
    width: "100%",
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
