/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR } from "../../../constants/colors";
import { getPosts } from "../../../actions/postsActions";
import { storeData, retrieveData } from "../../../api/asyncStorageApi";
import { setUserName, setUserPhoto } from "../../../actions/profileActions";

type Props = {
  navigator: Object,
  getPosts: Function,
  userName: string,
  userPhoto: string,
  setUserName: Function,
  setUserPhoto: Function
};

class InitialScreen extends PureComponent<Props> {
  componentDidMount() {
    const {
      getPosts,
      userName,
      setUserName,
      userPhoto,
      setUserPhoto
    } = this.props;
    getPosts();
    storeData("user", "Ksenia Kardash");
    storeData(
      "userPhoto",
      "https://facebook.github.io/react-native/docs/assets/favicon.png"
    );
    if (userName == "") {
      retrieveData("user").then(name => setUserName(name));
    }
    if (userPhoto == "") {
      retrieveData("userPhoto").then(userPhoto => setUserPhoto(userPhoto));
    }
  }

  navigateToNextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "PostsFeed",
      title: "PostsFeed",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ConfirmButton text="START" onPress={this.navigateToNextPage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center"
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
    getPosts: () => dispatch(getPosts()),
    setUserName: userName => dispatch(setUserName(userName)),
    setUserPhoto: userPhoto => dispatch(setUserPhoto(userPhoto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
