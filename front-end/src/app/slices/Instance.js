import { getLogout } from 'app/slices/CookieSlice';
import axios from 'axios';
import Cookies from 'js-cookie';

/**
 * @brief intercepter setting
 */
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json', withCredentials: true },
});

/**
 * @brief 401 error인 경우 token 재발급 처리
 * @details
 * 1. 401 error 응답이 들어오면 cookie에 저장된 refreshToken을 request 보냄
 * 2. "Token resiuuse"가 들어오면 재발급 받은 token을 새로 저장
 * 3. 재발급 받은 accessToken을 원래의 request에 다시 보냄
 * @param {*} error
 * @returns await instance.request(config)
 */
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

/**
 * @brief interceptor request
 * @details accessToken을 담아 request 보냄
 * @param config
 * @returns config
 */
instance.interceptors.request.use(
  async (config) => {
    // console.log(config);
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
    // console.log('interceptor request = ', config);
    return config;
  },
  async (error) => Promise.reject(error)
);

/**
 * @brief interceptor response
 * @detail response에 따른 정상/비정상 처리
 * @param response
 * @return respnse, handleTokenRefreshAndRetry(error), window.alert, Promise.reject(error)
 */
// [ ] 로그인/회원가입 메시지 처리 필요
instance.interceptors.response.use(
  async (response) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) response.headers.authorization = `Bearer ${accessToken}`;
    // console.log('interceptor response 성공 = ', response);
    return response;
  },
  async (error) => {
    console.log('interceptor response 실패 = ', error);
    if (error.response && error.response.status !== undefined) {
      const status = error.response.status;
      if (status === 401) {
        return handleTokenRefreshAndRetry(error);
      } else if (status === 404) {
        return status;
      } else if (status === 409) {
        return console.error(error);
      } else if (status === undefined) {
        console.log('글 수정할 때 오류뜨길래 우선..이렇게 해놓음');
        return window.location.href('/boards/list?page=0');
      } else {
        getLogout();
        return Promise.reject(error);
      }
    } else {
      JSON.stringify(error);
      return window.location.assign('/boards/list?page=0');
    }
  }
);

export default instance;
