import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/authActions';
import Button from '../atoms/Button';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();

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
      <Button title="LogOut" onPress={handleLogout} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginTop: 100,
  },
});
