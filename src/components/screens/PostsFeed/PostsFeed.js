/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import HeaderTitle from "../../common/HeaderTitle";
import UserPost from "../../common/UserPost";
import FadeWrapper from "../../common/FadeWrapper";

type Props = {
  posts: Array<Posts>
};

type Posts = {
  _id: string,
  index: number,
  uri: string,
  uriPhoto: string,
  userName: string
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

  filtering = (posts: Array<Posts>, query: string): Array<Posts> => {
    return posts.filter(post => {
      const userName = post.userName.toUpperCase();
      const queryData = query.toUpperCase();
      return userName.indexOf(queryData) > -1;
    });
  };

  _keyExtractor = (item: Posts) => item._id;

  _renderItem = (inboundData: { item: Posts }) => {
    return (
      <FadeWrapper>
        <UserPost
          userName={inboundData.item.userName}
          uri={{ uri: inboundData.item.uri }}
          uriPhoto={{ uri: inboundData.item.uriPhoto }}
        />
      </FadeWrapper>
    );
  };

  render() {
    let filter;
    const { posts } = this.props;
    const { searchName, toggleSearch } = this.state;
    searchName !== ""
      ? (filter = this.filtering(posts, searchName))
      : (filter = posts);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonIcon iconName="search" setToggle={this._setToggle} />
          <HeaderTitle text="FEED" />
          <ButtonIcon iconName="plus" />
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
    paddingBottom: 0
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
