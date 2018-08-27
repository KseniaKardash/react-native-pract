/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";
import ButtonIcon from "../../common/ButtonIcon";
import ConfirmButton from "../../common/ConfirmButton";
import HeaderTitle from "../../common/HeaderTitle";
import InputText from "../../common/InputText";
import TextArea from "../../common/TextArea";
import { BACKGROUND_COLOR } from "../../../constants/colors";
import type { Uri } from "../../../types/types";

type Props = {
  navigator: Object,
  uri: Uri
};

class FinishPost extends PureComponent<Props> {
  previousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  nextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "InfoModal",
      title: "InfoModal",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    const { uri } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <ButtonIcon iconName="chevron-left" onPress={this.previousPage} />
            <HeaderTitle text="FINISH POST" />
          </View>
          <View style={styles.tag}>
            <Image style={styles.img} source={uri} />
            <InputText />
          </View>
          <TextArea />
        </View>
        <ConfirmButton text="DONE" onPress={this.nextPage} />
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

export default FinishPost;
