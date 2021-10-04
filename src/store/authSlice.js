import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/auth-service';

export const requestRegister = createAsyncThunk(
  'auth/register',
  async (formData) => {
    const response = await AuthService.register(formData);
    return response.data;
  },
);
export const requestLogin = createAsyncThunk(
  'auth/login',
  async (formData) => {
    const response = await AuthService.login(formData);
    return response.data;
  },
);
export const requestSaveUser = createAsyncThunk(
  'auth/saveUser',
  async (formData) => {
    const response = await AuthService.save(formData);
    return response.data;
  },
);
export const requestCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async () => {
    const response = await AuthService.current();
    return response.data;
  },
);

/* eslint no-param-reassign: ["error", { "props": false }] */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuth: false,
    isError: false,
    isLoading: false,
  },
  reducers: {
    updateFieldAuth: (state, action) => {
      state.user.action.key = action.email;
    },
    logout: (state) => {
      state.user = {};
      state.isAuth = false;
    },
  },
  extraReducers: {
    [requestRegister.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem('Token', action.payload.user.token);
    },
    [requestRegister.rejected.toString()]: (state) => { state.isError = true; },
    [requestLogin.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem('Token', action.payload.user.token);
    },
    [requestLogin.rejected.toString()]: (state) => { state.isError = true; },
    [requestCurrentUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem('Token', action.payload.user.token);
    },
    [requestCurrentUser.rejected.toString()]: (state) => { state.isError = true; },
    [requestSaveUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isError = false;
    },
    [requestSaveUser.rejected.toString()]: (state) => { state.isError = true; },
  },
});

export const {
  updateFieldAuth,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
