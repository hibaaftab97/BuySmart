import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../Api';
import {endpoints} from '../../Api/config';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loader: false,
    softLoader: false,
    initialRoute: 'Login',
  },
  reducers: {
    showLoader: (state, action) => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
    showSoftLoader: (state, action) => {
      state.softLoader = true;
    },
    hideSoftLoader: state => {
      state.softLoader = false;
    },
    setInitialRouteToLogin: state => {
      state.initialRoute = 'Login';
    },
  },
});

export const {
  showLoader,
  hideLoader,
  hideSoftLoader,
  showSoftLoader,
  setInitialRouteToLogin,
} = loaderSlice.actions;

export const selectLoader = state => state.loader.loader;
export const selectSoftLoader = state => state.loader.softLoader;
export const selectInitialRoute = state => state.loader.initialRoute;

export default loaderSlice.reducer;