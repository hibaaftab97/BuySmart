import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigations from './src/navigations';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/src/integration/react';
import {Provider} from 'react-redux';
import {store,persistor} from './src/StateManagement/store';
import LoadingComponent from './src/components/Loader';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Navigations />
      <LoadingComponent />
    </View>
    </PersistGate>
    </Provider>
  );
};

export default App;