import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomScreen from '../../screens/WelcomeScreen';
import LoginCustomerScreen from '../../screens/LoginCustomerScreen';
import SignUp from '../../screens/SignupScreen'
import LoginVendorScreen from '../../screens/LoginVendorScreen'
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen'

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={WelcomScreen} />
      <AuthStack.Screen name="LoginCustomerScreen" component={LoginCustomerScreen} />
      <AuthStack.Screen name="LoginVendorScreen" component={LoginVendorScreen} />
      <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

      <AuthStack.Screen name="SignUpScreen" component={SignUp} />

    </AuthStack.Navigator>
  );
};

export default AuthNavigator;