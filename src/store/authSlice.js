import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOCAL_STORE_TOKEN_NAME, LOCAL_STORE_USER } from '../constants/consts';
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

const userInitial = !!localStorage.getItem(LOCAL_STORE_TOKEN_NAME)
  ? JSON.parse(localStorage.getItem(LOCAL_STORE_USER)) : {};

/* eslint no-param-reassign: ["error", { "props": false }] */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userInitial,
    isAuth: !!localStorage.getItem(LOCAL_STORE_TOKEN_NAME),
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
      localStorage.setItem(LOCAL_STORE_TOKEN_NAME, action.payload.user.token);
      localStorage.setItem(LOCAL_STORE_USER, JSON.stringify(action.payload.user));
    },
    [requestRegister.rejected.toString()]: (state) => { state.isError = true; },
    [requestLogin.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem(LOCAL_STORE_TOKEN_NAME, action.payload.user.token);
      localStorage.setItem(LOCAL_STORE_USER, JSON.stringify(action.payload.user));
    },
    [requestLogin.rejected.toString()]: (state) => { state.isError = true; },
    [requestCurrentUser.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem(LOCAL_STORE_TOKEN_NAME, action.payload.user.token);
      localStorage.setItem(LOCAL_STORE_USER, JSON.stringify(action.payload.user));
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
