import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import Button from '../atoms/Button.js';
import TextInputField from '../atoms/TextInputField.js';
import PasswordInputFields from '../atoms/PasswordInputFields.js';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/authActions.js'; // Adjust path as needed

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  // Redux state
  const { loading, error } = useSelector((state) => state.auth);

  // Local state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordCriteria, setPasswordCriteria] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    minLength: false,
  });

  // Email validation
  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(text) ? '' : 'Invalid email format');
  };

  // Password validation
  const validatePassword = (text) => {
    setPassword(text);
    setPasswordCriteria({
      lowercase: /[a-z]/.test(text),
      uppercase: /[A-Z]/.test(text),
      number: /[0-9]/.test(text),
      minLength: text.length >= 8,
    });
  };

  // Sign-up function
  const handleSignUp = async () => {
    if (!name) {
      Alert.alert('Error', 'Name is required');
      return;
    }
    if (emailError) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    if (!passwordCriteria.lowercase || !passwordCriteria.uppercase || !passwordCriteria.number || !passwordCriteria.minLength) {
      Alert.alert('Error', 'Password does not meet criteria');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await dispatch(registerUser(email, password)); 
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('SignIn'); 
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
      <View style={styles.form}>
        <TextInputField label="Name" placeholder="Name" value={name} onChangeText={setName} />

        <TextInputField label="Email" placeholder="Email" value={email} onChangeText={validateEmail} style={emailError ? styles.errorBorder : null} />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <PasswordInputFields label="Password" placeholder="Password" value={password} onChangeText={validatePassword} />

        <PasswordInputFields label="Confirm Password" placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} 
          style={confirmPassword !== password && confirmPassword.length > 0 ? styles.errorBorder : null} 
        />
        {confirmPassword !== password && confirmPassword.length > 0 && <Text style={styles.errorText}>Passwords do not match</Text>}
      </View>

      {/* Password Criteria Validation */}
      <View style={styles.validationContainer}>
        <View style={styles.singleRow}>
          <View style={styles.singleCondition}>
            <Image source={passwordCriteria.lowercase ? require('../../../assets/icons/Tick.png') : require('../../../assets/icons/relode.png')} style={styles.eyeIcon} />
            <Text style={styles.conditionValidation}>One Lowercase character</Text>
          </View>
          <View style={styles.singleCondition}>
            <Image source={passwordCriteria.uppercase ? require('../../../assets/icons/Tick.png') : require('../../../assets/icons/relode.png')} style={styles.eyeIcon} />
            <Text style={styles.conditionValidation}>One Uppercase character</Text>
          </View>
        </View>
        <View style={styles.singleRow}>
          <View style={styles.singleCondition}>
            <Image source={passwordCriteria.minLength ? require('../../../assets/icons/Tick.png') : require('../../../assets/icons/relode.png')} style={styles.eyeIcon} />
            <Text style={styles.conditionValidation}>8 characters minimum</Text>
          </View>
          <View style={styles.singleCondition}>
            <Image source={passwordCriteria.number ? require('../../../assets/icons/Tick.png') : require('../../../assets/icons/relode.png')} style={styles.eyeIcon} />
            <Text style={styles.conditionValidation}>One number</Text>
          </View>
        </View>
      </View>

      <View style={styles.loginButton}>
        <Button title={loading ? "Signing Up..." : "Sign Up"} onPress={handleSignUp} disabled={loading} />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.createAccountLink}>
        <Text style={styles.createAccountLinkText}>
          Have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.signUpLink}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 5,
  },
  text: {
    color: "#FFFFFf",
    fontSize: 24,
    textAlign: 'center',
    marginTop: 71,
  },
  form: {
    marginTop: 85,
    gap: 18,
    alignItems: 'center',
  },
  errorBorder: {
    borderColor: "#FFD482",
    borderWidth: 1,
  },
  errorText: {
    color: "#FFD482",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  validationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  singleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  singleCondition: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '50%',
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  conditionValidation: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  loginButton: {
    alignItems: 'center',
    marginTop: 50,
  },
  createAccountLink: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
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

export default SignUp;
