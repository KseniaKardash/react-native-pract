/* @flow */
import firebase from "react-native-firebase";

const config = {
  apiKey: "AIzaSyARKSbP6BFfP2RQXkPa4zWzv400w7znYPw",
  authDomain: "react-native-1b2a0.firebaseapp.com",
  databaseURL: `https://react-native-1b2a0.firebaseio.com/`,
  projectId: "react-native-1b2a0",
  storageBucket: "react-native-1b2a0.appspot.com",
  messagingSenderId: "715039456545"
};
const db = firebase.initializeApp(config);
export default db;
