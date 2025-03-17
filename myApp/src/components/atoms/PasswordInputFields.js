import React, { useState, useEffect, useRef } from "react";
import { TextInput, StyleSheet, Text, View, Animated, TouchableOpacity, Image } from "react-native";


const PasswordInputFields = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to manage password visibility
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current; 

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 8], 
    }),
    left: 20,
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
    color: isFocused ?"#C0C0C0" : "#C0C0C0", 
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

  const iconStyle = {
    shadowColor: isPasswordVisible ? "#FFD482" : "transparent", // Add shadow if clicked
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible} // Toggle visibility based on state
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {/* Eye icon to toggle password visibility */}
      <TouchableOpacity onPress={togglePasswordVisibility} style={[styles.iconContainer, iconStyle]}>
        <Image 
          source={require("../../../assets/icons/eye.png")} // Replace with your actual path
          style={styles.eyeIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputFields;

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 64,
    borderRadius: 12,
    backgroundColor: "#3D3D3D", // Dark background
    justifyContent: "center",
    paddingHorizontal: 12,
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 12,
    fontWeight: "500",
  },
  input: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 16,
    paddingLeft: 22,
  },
  iconContainer: {
    position: "absolute",
    right: 26,
    top: 26, 
  },
  eyeIcon: {
    width: 16,
    height: 11,
  },
});
