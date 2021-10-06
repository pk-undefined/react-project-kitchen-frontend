import axios from 'axios';
import { LOCAL_STORE_TOKEN_NAME } from '../constants/consts';

// const API_URL = 'http://localhost:3000/api';
const API_ROOT = 'http://194.58.119.115:3000/api';

const axiosAPI = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosAPI.interceptors.request.use((config) => {
  /* eslint no-param-reassign: "error" */
  config.headers.Authorization = `Token ${localStorage.getItem(LOCAL_STORE_TOKEN_NAME)}`;
  return config;
});

// axiosAPI.interceptors.response.use((config) => (config),
//   async (error) => {
//     const originalRequest = error.config;
//     if((error.response.status === 401 || error.response.status === 403) &&
//       !error.config._isRetry && originalRequest){
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.post(API_URL+'/auth/token',
//           {token: localStorage.getItem('refreshToken')});
//         localStorage.setItem('refreshToken', response.data.refreshToken);
//         localStorage.setItem('accessToken', response.data.accessToken.split(' ')[1]);
//         return axiosAPI.request(originalRequest);
//       }catch (error) {
//         console.log('Авторизуйтесь');
//       }
//       throw error;
//     }
//   return originalRequest;
// });

export default axiosAPI;
