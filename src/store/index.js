import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileSlice from './profileSlice';
import articleSlice from './articleSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileSlice,
    article: articleSlice,
  },
});
