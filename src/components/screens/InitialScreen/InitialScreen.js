/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR } from "../../../constants/colors";
import { getPosts } from "../../../actions/postsAction";
import { storeData, clearStorage } from "../../../api/asyncStorageApi";

type Props = {
  navigator: Object,
  getPosts: Function
};

class InitialScreen extends PureComponent<Props> {
  componentWillMount() {
    const { getPosts } = this.props;
    getPosts();
    // clearStorage();
    storeData("user", "Ksenia Kardash");
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

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InitialScreen);
