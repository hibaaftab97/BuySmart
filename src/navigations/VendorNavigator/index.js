import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VendorDashboardScreen from '../../screens/VendorDashboardScreen';
import ContactUs from '../../screens/ContactUsScreen'
import TeamScreen from '../../screens/TeamScreen'
import AboutusScreen from '../../screens/AboutusScreen'
import VendorStatusScreen from '../../screens/VendorStatusScreen'
import ProfileScreen from '../../screens/ProfileScreen'


const ShopStack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  return (
    <ShopStack.Navigator screenOptions={{headerShown: false}}>
      <ShopStack.Screen name="VendorDashboardScreen" component={VendorDashboardScreen} />
      <ShopStack.Screen name="ContactUsScreen" component={ContactUs} />
      <ShopStack.Screen name="TeamScreen" component={TeamScreen} />
      <ShopStack.Screen name="AboutusScreen" component={AboutusScreen} />

      <ShopStack.Screen name="VendorStatusScreen" component={VendorStatusScreen} />

      <ShopStack.Screen name="ProfileScreen" component={ProfileScreen} />


  

    </ShopStack.Navigator>
  );
};

export default ShopStackNavigator;