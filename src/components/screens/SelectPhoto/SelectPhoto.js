/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import ConfirmButton from "../../common/ConfirmButton";
import HeaderTitle from "../../common/HeaderTitle";
import { URI } from "../../../constants/URI";
import { BACKGROUND_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object
};

class SelectPhoto extends PureComponent<Props> {
  _previousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  _nextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "FinishPost",
      title: "FinishPost",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <ButtonIcon iconName="chevron-left" onPress={this._previousPage} />
            <HeaderTitle text="CONFIRM PHOTO" />
          </View>
          <Image style={styles.img} source={URI} />
        </View>
        <ConfirmButton
          style={styles.button}
          text="NEXT"
          onPress={this._nextPage}
        />
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
    padding: 20,
    paddingBottom: 50
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 3
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    justifyContent: "space-between",
    paddingBottom: 30
  },
  tag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between"
  },
  tags: {
    display: "flex",
    flexGrow: 4
  }
});

export default SelectPhoto;
