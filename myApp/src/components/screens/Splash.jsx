import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../atoms/Button';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigation]);  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>      
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
