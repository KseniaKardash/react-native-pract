/* @flow */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  text: string
}

const СonfirmButton = (props: Props) => {
  const {text} = props;
  return (
    <LinearGradient
        colors={['#D14DAE', '#ed569b', '#fb6885', '#fb7775', '#f58c86']}
        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
        style={styles.button}>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
      width: 200,
      alignItems: 'center',
  },
  button: {
    height: 48,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 198,
        fontSize: 18,
        // fontFamily: 'Caviar_Dreams_Bold'
  }
});

export default СonfirmButton;
