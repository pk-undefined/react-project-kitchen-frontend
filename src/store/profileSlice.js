import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProfileService from '../services/profile-service';

export const requestGetProfile = createAsyncThunk(
  'profile/getProfile',
  async (formData) => {
    const response = await ProfileService.get(formData);
    return response.data;
  },
);
export const requestFollowUser = createAsyncThunk(
  'profile/follow',
  async (currentUsername) => {
    const response = await ProfileService.follow(currentUsername);
    return response.data;
  },
);
export const requestUnfollowUser = createAsyncThunk(
  'profile/unfollow',
  async (currentUsername) => {
    const response = await ProfileService.unfollow(currentUsername);
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
    [requestFollowUser.fulfilled.toString()]: (state, action) => {
      state.profile = action.payload.profile;
    },
    [requestUnfollowUser.fulfilled.toString()]: (state, action) => {
      state.profile = action.payload.profile;
    },
  },
});

export const {
  updateFieldAuth,
} = profileSlice.actions;
export default profileSlice.reducer;
