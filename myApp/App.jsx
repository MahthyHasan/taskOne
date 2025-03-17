import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store/store";
import SignIn from './src/components/screens/SignIn';
import Splash from './src/components/screens/Splash';
import SignUp from './src/components/screens/SignUp';
import { loadUser } from "./src/store/authActions"; 
import GOT from './src/components/screens/GOT';
import Profile from './src/components/screens/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    dispatch(loadUser()); 
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerShown: false,
      }}
      >
        {user ? (
        <>                
        <Stack.Screen name="GOT" component={GOT} />        
        <Stack.Screen name="Profile" component={Profile} />        
        </>
        
                        
        ) : (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
