import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    await AsyncStorage.removeItem("user");
  } catch (error) {
    throw new Error(error.message);
  }
};

const getStoredUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

export default {
  registerUser,
  loginUser,
  logoutUser,
  getStoredUser
};
