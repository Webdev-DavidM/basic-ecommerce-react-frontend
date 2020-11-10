import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userLogin = createAsyncThunk(
  'users/userLogin',
  async ({ email, password }, thunkAPI) => {
    let res = await axios.post('https://my-basic-ecommerce-site.herokuapp.com/users/login', { email, password });
    console.log(res.data.name);
    if (res.status === 202) {
      return { email, password, name: res.data.name };
    }
  }
);

const userRegister = createAsyncThunk(
  'users/userRegister',
  async ({ email, password, name }, thunkAPI) => {
    let res = await axios.post('https://my-basic-ecommerce-site.herokuapp.com/users/register', { email, password, name });
    console.log(res);
    if (res.status === 201) {
      return { email, password, name };
    }
  }
);

const adminLogin = createAsyncThunk(
  'users/adminLogin',
  async ({ email, password }, thunkAPI) => {
    let res = await axios.post('https://my-basic-ecommerce-site.herokuapp.com/users/admin-login', { email, password });
    console.log(res);
    if (res.status === 201) {
      return { email, password };
    }
  }
);

export const slice = createSlice({
  name: 'users',
  initialState: {
    email: '',
    password: '',
    name: '',
    authenticated: null,
    registered: null,
    adminAuthenticated: true,
  },

  reducers: {
    signOut: (state, action) => {
      console.log('hello');
      state.email = '';
      state.password = '';
      state.name = '';
      state.authenticated = false;
      state.registered = null;
    },
  },

  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      let { email, password, name } = action.payload;
      state.email = email;
      state.password = password;
      state.name = name;
      state.authenticated = true;
    },
    [userLogin.rejected]: (state) => {
      state.authenticated = false;
    },
    [userRegister.fulfilled]: (state, action) => {
      let { email, password, name } = action.payload;
      state.email = email;
      state.password = password;
      state.name = name;
      state.registered = true;
      state.authenticated = true;
    },
    [userRegister.rejected]: (state) => {
      state.registered = false;
    },
    [adminLogin.fulfilled]: (state, action) => {
      state.authenticated = true;
      state.adminAuthenticated = true;
    },
    [adminLogin.rejected]: (state) => {
      return state;
    },
  },
});

export { userLogin, userRegister, adminLogin };

export const { signOut } = slice.actions;

export default slice.reducer;
