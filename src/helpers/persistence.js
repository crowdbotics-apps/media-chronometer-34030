import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
const USER_PROFILE_DATA_KEY = "USER_PROFILE_DATA_KEY";

const Persistence = {
  toString,
  toJSONObject,
  clearPersistence,
  setAccessToken,
  getAccessToken,
  setUserProfileData,
  getUserProfileData,
};

function toString(data) {
  if (typeof data !== "string") {
    return JSON.stringify(data);
  }
  return data;
}

function toJSONObject(data) {
  return JSON.parse(data);
}

function clearPersistence() {
  AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
  AsyncStorage.removeItem(USER_PROFILE_DATA_KEY);
}

// ************ Set Get - Access Token ************ //

async function setAccessToken(token) {
  try {
    const value = this.toString(token);
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, value);
  } catch (e) {
    // error reading value
  }
}

async function getAccessToken() {
  try {
    const value = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
}

// ************ Set Get - User Profile Data ************ //

async function setUserProfileData(data) {
  try {
    const value = this.toString(data);
    await AsyncStorage.setItem(USER_PROFILE_DATA_KEY, value);
  } catch (e) {
    // error reading value
  }
}

async function getUserProfileData() {
  try {
    const value = await AsyncStorage.getItem(USER_PROFILE_DATA_KEY);
    if (value !== null) {
      return this.toJSONObject(value);
    }
  } catch (e) {
    return null;
  }
}

export default Persistence;
