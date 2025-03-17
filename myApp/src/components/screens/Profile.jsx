import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/authActions';
import Button from '../atoms/Button';
import TextInputField from '../atoms/TextInputField.js';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      console.log("User logged out");
      navigation.replace("SignIn");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <View style={styles.form}>
        <TextInputField label="Name" value={user?.displayName || ""} placeholder="Name" />
        <TextInputField label="Email" value={user?.email || ""} placeholder="Email" />
      </View>
      <View style={styles.logOutButtenView}>
        <Button title="LogOut" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: 'center',
    marginTop: 78,
  },
  form: {
    justifyContent: 'center',
    marginTop: 102,
    gap: 18,
    alignItems: 'center',
  },
  logOutButtenView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 381,
  },
});
