import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from './CookieSlice';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json', withCredentials: true },
});

const handleTokenRefreshAndRetry = async (error) => {
  try {
    const { config } = error;
    const refreshToken = Cookies.get('refreshToken');

    const refreshResponse = await instance.post(
      '/members/reissue',
      {},
      {
        headers: { refreshtoken: refreshToken },
      }
    );

    if (refreshResponse.data === 'Token reissue') {
      const newAccessToken = refreshResponse.headers.authorization.split('Bearer ')[1];
      const newRefreshToken = refreshResponse.headers.refreshtoken;

      localStorage.setItem('accessToken', newAccessToken);
      Cookies.set('refreshToken', newRefreshToken);

      config.headers.authorization = `Bearer ${newAccessToken}`;
      config.headers.refreshtoken = newRefreshToken;
      return config;
    }
    return Promise.reject(error);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 요청할 때 accesstoken 게속 보내기
instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  async (error) => Promise.reject(error)
);

// 응답 받을 때 성공/실패에 따른 토큰 재발급
instance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const status = error.response.status;

    if (status === 401) {
      return handleTokenRefreshAndRetry(error);
    } else if (status === 404) {
      window.alert('404 error');
    } else if (status === 409) {
      window.alert('409 error');
    } else {
      logout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default instance;
