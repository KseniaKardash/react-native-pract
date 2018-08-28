/* @flow */
import { AsyncStorage } from "react-native";

export const generateKey = (key: string) => `@AsyncStorage:${key}`;

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(generateKey(key), value);
  } catch (error) {
    console.log("Error saving data" + error);
  }
};

export const retrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(generateKey(key));
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log("Error resetting data" + error);
  }
};

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(generateKey(key));
  } catch (error) {
    console.log("Error deleting data" + error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error cleaning Storage" + error);
  }
};
