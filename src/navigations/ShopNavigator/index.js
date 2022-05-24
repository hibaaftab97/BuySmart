import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopDashboardScreen from '../../screens/ShopDashboardScreen';
import ContactUs from '../../screens/ContactUsScreen'
import TeamScreen from '../../screens/TeamScreen'
import AboutusScreen from '../../screens/AboutusScreen'
import ShopStatusScreen from '../../screens/ShopStatusScreen'
import CustomerProfileScreen from '../../screens/CustomerProfileScreen'



const ShopStack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  return (
    <ShopStack.Navigator screenOptions={{headerShown: false}}>
      <ShopStack.Screen name="ShopDashboardScreen" component={ShopDashboardScreen} />
      <ShopStack.Screen name="ContactUsScreen" component={ContactUs} />
      <ShopStack.Screen name="TeamScreen" component={TeamScreen} />
      <ShopStack.Screen name="AboutusScreen" component={AboutusScreen} />
      <ShopStack.Screen name="CustomerProfileScreen" component={CustomerProfileScreen} />

      <ShopStack.Screen name="ShopStatusScreen" component={ShopStatusScreen} />



  

    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;