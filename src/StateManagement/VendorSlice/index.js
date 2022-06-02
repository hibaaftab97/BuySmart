import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../Api';
import {endpoints} from '../../Api/config';
import {getMessage, showToast} from '../../Api/HelperFunctions';
import {hideLoader, showLoader} from '../LoaderSlice';


// LOGIN USER THUNK
export const registerShop = createAsyncThunk(
    'shops/register',
    async ({name, description,status}, {dispatch}) => {
   
      dispatch(showLoader());
      try {
        let response;
        await Api.post(
          endpoints.vendor.registershop,
          {
            name,
            description,
            status
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
export const updateStatus = createAsyncThunk(
  'shops/setShopStatus',
  async ({shop_id, status}, {dispatch}) => {
 
    dispatch(showLoader());
    try {
      let response;
      await Api.post(
        endpoints.vendor.updatestatus,
        {
          shop_id,
          status
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
  export const vendorSlice = createSlice({
    name: 'user',
    initialState: {
      shop: null,
    },
    reducers: {
    //   login: (state, action) => {
    //     console.log(action.payload);
    //     state.user = action.payload;
    //   },
      // signUp: (state, action) => {
      //   console.log(action.payload);
      //   // state.user = action.payload;
      // },
      
    },
    // extraReducers: {
    //   [LoginUser.fulfilled]: (state, {payload}) => {
    //     // console.log('payload', payload.user)
    //     state.user = payload.user;
    //     state.token = payload.token;
    //     state.loading = false;
    //   },
    //   [GetProfile.fulfilled]: (state, {payload}) => {
    //     console.log('GetProfile  payload', payload,state);
    //     state.user = payload;
    //     state.loading = false;
    //   },
    //   [LoginUser.pending]: state => {
    //     state.loading = true;
    //   },
    //   [LoginUser.rejected]: state => {
    //     state.loading = 'failed';
    //     console.error('FAILED');
    //   },
     
    // },
  });
  
//   export const {login, logout} = userSlice.actions;
  
//   export const selectUser = state => state.user?.user;
  //  pehla user is slice - reducer
  // second one is state
  
  export default vendorSlice.reducer;