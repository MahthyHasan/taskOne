import React, { useState, useEffect, useRef } from "react";
import { TextInput, StyleSheet, Text, View, Animated } from "react-native";

const TextInputField = ({placeholder, value, onChangeText, secureTextEntry = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current; // If value exists, keep label up

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
    left : 20,
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
    color: isFocused ? "#C0C0C0" : "#C0C0C0", 
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>{placeholder}</Animated.Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextInputField;

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
});
