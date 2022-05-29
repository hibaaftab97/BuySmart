import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../Api';
import {endpoints} from '../../Api/config';
import {getMessage, showToast} from '../../Api/HelperFunctions';
import {hideLoader, showLoader} from '../LoaderSlice';

// LOGIN USER THUNK
export const LoginUser = createAsyncThunk(
  'users/login',
  async ({email, password}, {dispatch}) => {
    console.log('email', email);
    console.log('password', password);
    dispatch(showLoader());
    try {
      let response;
      await Api.post(
        endpoints.auth.login,
        {
          email,
          password,
        },
        false,
      )
        .then(res => {
          response = res;
          dispatch(hideLoader());
          showToast(res);
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(e);
          }, 500);
          throw new Error(e);
        });

      console.log('response here', response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);


// REGISTER USER THUNK
export const RegisterUser = createAsyncThunk(
  'users/registerUser',
  async (
    {
      name,
      email,
      phone,
      password,
      type
    },
    {dispatch},
  ) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(endpoints.auth.register, {
        name,
        email,
        phone,
        password,
        type
      },false)
        .then(res => {
          console.log(res);
          response = res;
          showToast(res);
          dispatch(hideLoader());
        })
        .catch(e => {
          console.log('eee',e);

          dispatch(hideLoader());

          setTimeout(() => {

            showToast(e);
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
// getProfile THUNK


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    packages: [],
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    // signUp: (state, action) => {
    //   console.log(action.payload);
    //   // state.user = action.payload;
    // },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, {payload}) => {
      // console.log('payload', payload.user)
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
    },
  
    [LoginUser.pending]: state => {
      state.loading = true;
    },
    [LoginUser.rejected]: state => {
      state.loading = 'failed';
      console.error('FAILED');
    },
   
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user?.user;
//  pehla user is slice - reducer
// second one is state

export default userSlice.reducer;