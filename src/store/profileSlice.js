import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProfileService from '../services/profile-service';

export const requestGetProfile = createAsyncThunk(
  'auth/getProfile',
  async (formData) => {
    const response = await ProfileService.get(formData);
    return response.data;
  },
);

/* eslint no-param-reassign: ["error", { "props": false }] */
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
    isAuth: false,
    isError: false,
    isLoading: false,
  },
  reducers: {
    updateFieldAuth: (state, action) => {
      state.user.action.key = action.email;
    },
  },
  extraReducers: {
    [requestGetProfile.fulfilled.toString()]: (state, action) => {
      state.profile = action.payload.profile;
      state.isAuth = true;
      state.isError = false;
    },
    [requestGetProfile.rejected.toString()]: (state) => { state.isError = true; },
  },
});

export const {
  updateFieldAuth,
} = profileSlice.actions;
export default profileSlice.reducer;
