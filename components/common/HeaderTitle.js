/* @flow */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  text: string
}

const HeaderTitle = (props: Props) => {
  const {text} = props;
  return (<Text style={styles.text}>{text}</Text>);
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 40
  }
});

export default HeaderTitle;
