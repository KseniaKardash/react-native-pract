/* @flow */
import React, { PureComponent } from "react";
import type { Node } from "react";
import { Animated } from "react-native";

type Props = {
  children?: Node
};

type State = {
  fadeAnimation: Object
};

class FadeWrapper extends PureComponent<Props, State> {
  state: State = {
    fadeAnimation: new Animated.Value(0)
  };

  componentDidMount() {
    const { fadeAnimation } = this.state;
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 200
    }).start();
  }

  render() {
    let { fadeAnimation } = this.state;
    let { children } = this.props;
    return (
      <Animated.View style={{ opacity: fadeAnimation }}>
        {children}
      </Animated.View>
    );
  }
}

export default FadeWrapper;
