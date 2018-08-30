/* @flow */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import ConfirmButton from "../../common/ConfirmButton";
import HeaderTitle from "../../common/HeaderTitle";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { BACKGROUND_COLOR } from "../../../constants/colors";
import type { Uri } from "../../../types/types";
import { addPost } from "../../../actions/postsAction";

type Props = {
  navigator: Object,
  uri: Uri,
  addPost: Function,
  userName: string,
  userPhoto: string
};

type State = {
  tag: string,
  description: string
};

class FinishPost extends PureComponent<Props, State> {
  state = {
    tag: "",
    description: ""
  };

  onChangeTag = (text: string) => {
    this.setState({ tag: text });
  };

  onChangeDescription = (text: string) => {
    this.setState({ description: text });
  };

  navigateToPreviousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };
  navigateToNextPage = () => {
    const { navigator, addPost, uri, userName, userPhoto } = this.props;
    const { tag, description } = this.state;
    navigator.push({
      screen: "InfoModal",
      title: "InfoModal",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
    const post = {
      id: this.generateId(),
      userName: userName,
      likes: this.generateLikes(),
      description: description,
      tag: tag,
      uriPhoto: userPhoto,
      uri: uri.uri
    };
    addPost(post);
  };

  generateId = () => {
    return (Math.random() * Math.pow(10, 10)).toFixed(0);
  };
  generateLikes = () => {
    return (Math.random() * Math.pow(10, 2)).toFixed(0);
  };

  render() {
    const { uri } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <ButtonIcon
              iconName="chevron-left"
              onPress={this.navigateToPreviousPage}
            />
            <HeaderTitle text="FINISH POST" />
          </View>
          <View style={styles.tag}>
            <Image style={styles.img} source={uri} />
            <InputText onChangeText={this.onChangeTag} />
          </View>
          <TextArea onChangeText={this.onChangeDescription} />
        </View>
        <ConfirmButton text="DONE" onPress={this.navigateToNextPage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    padding: 20,
    paddingBottom: 50
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 5
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    justifyContent: "space-between",
    marginBottom: 70
  },
  tag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between"
  }
});

const mapStateToProps = state => {
  return {
    userName: state.profile.userName,
    userPhoto: state.profile.userPhoto
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch(addPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishPost);
