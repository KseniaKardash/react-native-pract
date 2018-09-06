/* @flow */
import { AsyncStorage } from "react-native";

export const generateKey = (key: string) => `@AsyncStorage:${key}`;

export const storeData = async (
  key: string,
  value: string | Array<Object>,
  callback: ?(error: ?Error) => void
) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value), callback);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

export const retrieveData = async (
  key: string,
  callback: ?(error: ?Error, result: any) => Promise<void>
) => {
  try {
    return await AsyncStorage.getItem(key, callback).then(res =>
      JSON.parse(res)
    );
  } catch (error) {
    console.log("Error resetting data" + error);
  }
};

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting data" + error);
  }
};

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.log("Error getting all keys" + error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error cleaning Storage" + error);
  }
};
