import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from '../AuthNavigator';
import ShopStackNavigator from '../ShopNavigator';
import VendorNavigator from '../VendorNavigator';


const RootStack = createNativeStackNavigator();

const MainNavigator = () => {
  

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      <RootStack.Screen name="ShopStackNavigator" component={ShopStackNavigator} />
      <RootStack.Screen name="VendorNavigator" component={VendorNavigator} />


    </RootStack.Navigator>
  );
};

export default MainNavigator;