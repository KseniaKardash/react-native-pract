/* @flow */
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ButtonIcon from '../../common/ButtonIcon';
import ConfirmButton from '../../common/ConfirmButton';
import FullPost from '../../common/FullPost';
import HeaderTitle from '../../common/HeaderTitle';
import InputText from '../../common/InputText';
import TextArea from '../../common/TextArea';
import UserInfo from "../../common/UserInfo";
import UserPost from '../../common/UserPost';
import PostSuccessful from '../../common/PostSuccessful';
import {URI_PHOTO, URI} from '../../../constants/URI';

const PrimitivesTestScreen = () => {
  return (
  <ScrollView style={styles.container}>
    <ConfirmButton text="NEXT"/>
    <FullPost userName="Ksenia Kardash" likes="123" description="Some text" uri={URI} uriPhoto={URI_PHOTO}/>
    <UserPost
      userName="Ksenia Kardash"
      uri={URI} uriPhoto={URI_PHOTO}/>
    <HeaderTitle text="TITLE HERE"/>
    <PostSuccessful titlePost="POST SUCCESSFUL" textPost="Some text text text text text text text text" uriPhoto={URI_PHOTO}/>
    <InputText/>
    <TextArea/>
    <UserInfo userName="Ksenia Kardash" uriPhoto={URI_PHOTO}/>
    <ButtonIcon iconName="search"/>
    <ButtonIcon iconName="chevron-right"/>
    <ButtonIcon iconName="chevron-left"/>
    <ButtonIcon iconName="plus"/>
  </ScrollView>
);};
const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
});

export default PrimitivesTestScreen;
