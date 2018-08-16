/* @flow */
import React from 'react';
import {ScrollView} from 'react-native';
import ConfirmButton from '../../common/ConfirmButton';
import FullPost from '../../common/FullPost';
import HeaderTitle from '../../common/HeaderTitle';
import TagInput from '../../common/TagInput';
import TextArea from '../../common/TextArea';
import UserInfo from "../../common/UserInfo";
import UserPost from '../../common/UserPost';
import PostSuccessful from '../../common/PostSuccessful';
import NextButton from '../../common/NextButton';
import PreviousButton from '../../common/PreviousButton';



const PrimitivesTestScreen = () => {
  return (
  <ScrollView style={{width: '100%'}}>
    <ConfirmButton text="LOGIN"/>
    <FullPost userName="Ksenia Kardash" likes="123" description="Some text" uri={{
      uri: 'https://i.pinimg.com/564x/ee/bd/23/eebd23a588c8199faa099124ba5f099f.jpg'
    }}/>
    <UserPost
      userName="Ksenia Kardash"
      uri={{
        uri: 'https://i.pinimg.com/564x/ee/bd/23/eebd23a588c8199faa099124ba5f099f.jpg'
      }}/>
    <HeaderTitle text="TITLE HERE"/>
    <PostSuccessful titlePost="POST SUCCESSFUL" textPost="Some text text text text text text text text"/>
    <TagInput/>
    <TextArea/>
    <UserInfo userName="Ksenia Kardash"/>
    <NextButton/>
    <PreviousButton/>
  </ScrollView>);
};

export default PrimitivesTestScreen;
