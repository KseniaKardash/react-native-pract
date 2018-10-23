/* @flow */
import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

type Props = {
  userName: string,
  uriPhoto: uri,
  navigator: Object
};

type uri = {
  uri: string
};

class UserInfo extends PureComponent<Props> {
  navigateToNextPage = () => {
    const { navigator, userName } = this.props;
    navigator.push({
      screen: "UserProfile",
      title: userName,
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };
  render() {
    const { userName, uriPhoto } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.navigateToNextPage}>
        <View style={styles.container}>
          <Image style={styles.img} source={uriPhoto} />
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  userName: {
    fontSize: 18
  }
});

export default UserInfo;
