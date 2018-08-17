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
    color: '#3f3f4b',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 10,
  }
});

export default HeaderTitle;
