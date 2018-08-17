/* @flow */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonIcon from '../../common/ButtonIcon';
import FullPost from '../../common/FullPost';
import HeaderTitle from '../../common/HeaderTitle';
import {URI, URI_PHOTO} from '../../../constants/URI';

const FinishPost = () => {
  return (
  <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
      <ButtonIcon iconName="chevron-left"/>
      <HeaderTitle text="POST"/>
    </View>
    </View>
     <FullPost userName="Ksenia Kardash" likes="123" description="Some text" uri={URI} uriPhoto={URI_PHOTO}/>
  </View>);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 100,
    marginTop: 20
  },
  header:  {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    justifyContent: 'space-between',
  },
});

export default FinishPost;
