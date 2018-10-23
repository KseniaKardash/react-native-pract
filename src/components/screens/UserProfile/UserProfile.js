/* @flow */
import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Animated,
  FlatList
} from "react-native";
import {
  Tabs,
  Card,
  WingBlank,
  WhiteSpace,
  Toast,
  Steps,
  Modal,
  Button,
  List,
  Switch,
  SearchBar
} from "antd-mobile-rn";
import LinearGradient from "react-native-linear-gradient";
import { GRADIENT_COLORS } from "../../../constants/colors";
import type { User, Posts } from "../../../types/types";

const Step = Steps.Step;

const HEADER_MIN_HEIGHT = 170;
const HEADER_MAX_HEIGHT = 250;
const tabs = [
  {
    title: "Posts",
    sub: "1"
  },
  { title: "Animated Header", sub: "2" },
  { title: "Steps", sub: "3" }
];

type Props = {
  navigator: Object,
  user: User,
  posts: Posts
};

class UserProfile extends PureComponent<Props> {
  scrollYAnimatedValue = new Animated.Value(0);

  headerHeight = this.scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, -25],
    extrapolate: "clamp"
  });

  bodyHeight = this.scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, -40],
    extrapolate: "clamp"
  });

  animateHeaderStyle = {
    transform: [{ translateY: this.headerHeight }]
  };

  animateBodyStyle = {
    transform: [{ translateY: this.bodyHeight }]
  };
  onScrollHandler = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: this.scrollYAnimatedValue }
        }
      }
    ],
    { useNativeDriver: true }
  );

  onButtonClick = () => {
    Modal.alert("Title", "alert content", [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK" }
    ]);
  };

  getKeyExtractor = (item: Post) => item.id.toString();

  navigateToPreviousPage = () => {
    const { navigator } = this.props;
    navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  showToast = () => {
    Toast.success("Load success", 1);
  };

  renderItem = (inboundData: { item: Post }) => {
    return (
      <WingBlank key={inboundData.item.id} size="md">
        <WhiteSpace size="sm" />
        <Card>
          <Card.Body>
            <Image
              source={{ uri: inboundData.item.uri }}
              style={styles.userPost}
            />
          </Card.Body>
          <Card.Footer extra={<Text>{inboundData.item.description}</Text>} />
        </Card>
        <WhiteSpace size="sm" />
      </WingBlank>
    );
  };

  render() {
    const { user, posts } = this.props;

    return (
      <View style={styles.screenContainer}>
        <Animated.View style={[this.animateHeaderStyle, styles.header]}>
          <LinearGradient
            colors={GRADIENT_COLORS}
            style={styles.linearGradient}
          >
            <Image
              style={styles.userPhoto}
              source={{ uri: user.userInfo.photo }}
            />
            <Text style={styles.userName}>{user.userInfo.name}</Text>
          </LinearGradient>
        </Animated.View>
        <Animated.View style={[this.animateBodyStyle, styles.container]}>
          <Tabs tabs={tabs} initialPage={0} style={styles.container}>
            <View style={styles.container}>
              <FlatList
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                initialNumToRender={15}
                maxToRenderPerBatch={20}
                data={posts}
                windowSize={21}
                keyExtractor={this.getKeyExtractor}
                renderItem={this.renderItem}
              />
            </View>
            <Animated.ScrollView
              style={styles.container}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={10}
              onScroll={this.onScrollHandler}
            >
              <WhiteSpace size="xl" />
              <TouchableWithoutFeedback onPress={this.showToast}>
                <Text>Success Toast</Text>
              </TouchableWithoutFeedback>
              <WhiteSpace size="xl" />
              <Button onClick={this.onButtonClick}>ALERT</Button>
              <Steps>
                <Step
                  status="process"
                  title="Finished"
                  description="This is description"
                />
                <Step
                  status="error"
                  title="Error"
                  description="This is description"
                />
                <Step status="wait" description="This is description" />
              </Steps>
              <WhiteSpace size="xl" />
            </Animated.ScrollView>
            <Animated.ScrollView
              style={styles.tab}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={10}
              onScroll={this.onScrollHandler}
            >
              <SearchBar defaultValue="priv" placeholder="priv" />
              <SearchBar placeholder="priv" showCancelButton />
              <SearchBar placeholder="priv" showCancelButton />
              <List style={styles.list}>
                <List.Item extra={<Switch checked />}>On(controlled)</List.Item>
                <List.Item extra={<Switch />}>Off(controlled)</List.Item>
                <List.Item extra={<Switch disabled />}>disabled</List.Item>
              </List>
            </Animated.ScrollView>
          </Tabs>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    flex: 1
  },
  list: {
    flex: 1,
    width: "100%"
  },
  userPhoto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "white",
    padding: 5
  },
  container: {
    flex: 1
  },
  linearGradient: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  userName: {
    color: "#FFFFFF",
    paddingTop: 20,
    fontSize: 18
  },
  tab: {
    width: "100%",
    flex: 1
  },
  userPost: {
    height: 200,
    width: "95%",
    borderRadius: 3,
    alignSelf: "center"
  },
  header: {
    width: "100%",
    height: 250
  }
});

export default UserProfile;
