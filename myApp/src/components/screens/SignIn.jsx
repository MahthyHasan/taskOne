import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/authActions.js'; 
import Button from '../atoms/Button.js';
import TextInputField from '../atoms/TextInputField.js';
import PasswordInputFields from '../atoms/PasswordInputFields.js';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      await dispatch(loginUser(email, password));
      navigation.replace('GOT'); 
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <View style={styles.form}>
        <TextInputField label="Email" placeholder="Email" value={email} onChangeText={setEmail} />
        <PasswordInputFields label="Password" placeholder="Password" value={password} onChangeText={setPassword} />
      </View>
      {/* TODO */}
      <View>
        <Text style={styles.forgetPass}>Forget Password?</Text>
      </View>
      <View style={styles.loginButton}>
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.createAccountLink}>
        <Text style={styles.createAccountLinkText}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

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
    marginTop: 124,
  },
  form: {
    justifyContent: 'center',
    marginTop: 85,
    gap: 18,
    alignItems: 'center',
  },
  forgetPass: {
    marginTop: 9,
    color: "#FFFFFF",
    textAlign: 'right',
    marginRight: 40,
    fontSize: 14,
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 77,
  },
  createAccountLink: {
    flex: 1,
    alignItems: 'center',
    marginTop: 261,
  },
  createAccountLinkText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  signUpLink: {
    color: "#FFD482",
    fontSize: 15,
  },
});
