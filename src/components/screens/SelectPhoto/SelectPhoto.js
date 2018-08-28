/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import ConfirmButton from "../../common/ConfirmButton";
import HeaderTitle from "../../common/HeaderTitle";
import { BACKGROUND_COLOR } from "../../../constants/colors";
import type { Uri } from "../../../types/types";

type Props = {
  navigator: Object,
  uri: Uri
};

class SelectPhoto extends PureComponent<Props> {
  navigateToPreviousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  navigateToNextPage = () => {
    const { navigator, uri } = this.props;
    navigator.push({
      screen: "FinishPost",
      title: "FinishPost",
      backButtonHidden: true,
      animated: true,
      animationType: "fade",
      passProps: { uri: uri }
    });
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
            <HeaderTitle text="CONFIRM PHOTO" />
          </View>
          <Image style={styles.img} source={uri} />
        </View>
        <ConfirmButton text="NEXT" onPress={this.navigateToNextPage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 5,
    paddingBottom: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    justifyContent: "space-between",
    paddingBottom: 10
  }
});

export default SelectPhoto;
