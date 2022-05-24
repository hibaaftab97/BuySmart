import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigations from './src/navigations';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Navigations />
    </View>
  );
};

export default App;