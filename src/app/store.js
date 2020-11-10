import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import shopReducer from '../reducers/shopReducer';

// configure store replaces create store in redux toolkit

export default configureStore({
  reducer: {
    users: userReducer,
    shop: shopReducer,
  },
});
