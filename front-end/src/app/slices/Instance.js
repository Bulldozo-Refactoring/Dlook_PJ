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
      const { authorization, refreshtoken } = refreshResponse.headers;
      if (authorization && refreshtoken) {
        localStorage.setItem('accessToken', authorization.split('Bearer ')[1]);
        Cookies.set('refreshToken', refreshtoken);

        config.headers.authorization = authorization;
        config.headers.refreshtoken = refreshtoken;

        return await instance.request(config);
      }
    }
    return Promise.reject(error);
  } catch (error) {
    return Promise.reject(error);
  }
};

instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  async (error) => Promise.reject(error)
);

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
