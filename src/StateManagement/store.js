import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import LoaderSlice from './LoaderSlice';
import UserSlice from './UserSlice';
import VendorSlice from './VendorSlice';


const reducers = combineReducers({
  user: UserSlice,
  loader: LoaderSlice,
  Vendor:VendorSlice

});

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loader'],
};

const persistedReducer = persistReducer(persistedConfig, reducers);
export const store  = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
  persistedReducer,
});

export const persistor = persistStore(store);


// {
//     user: {
//         user,
//         token,
//     },
//     loader: {
//         softLoader,
//         loader
//     }.
//     labTechnician: {
//         labTechnician: [
//             {

//             }
//         ]
//     }
// }