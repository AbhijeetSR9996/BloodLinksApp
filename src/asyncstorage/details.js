import AsyncStorage from '@react-native-async-storage/async-storage';

// storing data
const storeUserData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const getUserData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    const array = JSON.parse(value);
    // console.log(array, "local storage");
    if (value !== null) {
      return array;
    }
  } catch (error) {
    // Error retrieving data
  }
};

const clearAllUserData = async () => {
  const value = await AsyncStorage.clear();
  return value;
};



export {storeUserData, getUserData, clearAllUserData};
