/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import ButtonIcon from "../../common/ButtonIcon";
import ConfirmButton from "../../common/ConfirmButton";
import type { Uri } from "../../../types/types";
import HeaderTitle from "../../common/HeaderTitle";
import {
  SHADOW_COLOR,
  BACKGROUND_COLOR,
  BORDER_SHADOW_COLOR
} from "../../../constants/colors";

type Props = {
  navigator: Object
};

type State = {
  pickedImage: ?Uri
};

class ImagePickerScreen extends PureComponent<Props, State> {
  state = {
    pickedImage: null
  };

  previousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  nextPage = () => {
    const { navigator } = this.props;
    const { pickedImage } = this.state;
    if (pickedImage == null) {
      Alert.alert("Please, pick image from Gallery.");
    } else
      navigator.push({
        screen: "SelectPhoto",
        title: "SelectPhoto",
        backButtonHidden: true,
        animated: true,
        animationType: "fade",
        passProps: { uri: pickedImage }
      });
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image" }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
      }
    });
  };
  render() {
    const { pickedImage } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonIcon iconName="chevron-left" onPress={this.previousPage} />
          <HeaderTitle text="CREATE POST" />
          <ButtonIcon iconName="chevron-right" onPress={this.nextPage} />
        </View>
        <View style={styles.imgContainer}>
          <Image source={pickedImage} style={styles.img} />
        </View>
        <ConfirmButton text="PICK IMAGE" onPress={this.pickImageHandler} />
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
    paddingTop: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around"
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  imgContainer: {
    width: 300,
    height: 300,
    backgroundColor: SHADOW_COLOR,
    borderRadius: 5,
    shadowColor: BORDER_SHADOW_COLOR,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  }
});

export default ImagePickerScreen;
