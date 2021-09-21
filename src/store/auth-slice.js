import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/auth-service';

export const requestRegister = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(formData.state);
      return response.data;
    } catch (error) {
      return rejectWithValue(false);
    }
  },
);
export const requestLogin = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(formData.state);
      return response.data;
    } catch (error) {
      return rejectWithValue(false);
    }
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
  },
  extraReducers: {
    [requestRegister.fulfilled.toString()]: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.isError = false;
      localStorage.setItem('Token', action.payload.accessToken.split(' ')[1]);
    },
    [requestRegister.rejected.toString()]: (state) => { state.isError = true; },
  },
});

export const {
  updateFieldAuth,
} = authSlice.actions;
export default authSlice.reducer;
