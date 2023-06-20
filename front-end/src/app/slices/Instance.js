import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from './CookieSlice';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json', withCredentials: true },
});

// 요청할 때 accesstoken 게속 보내기
instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken !== null) {
      config.headers.authorization = `Bearer ${accessToken}`;
      console.log('요청 보냄', config);
      return config;
    } else {
      config.headers.authorization = `Bearer ${accessToken}`;
      config.headers.refreshToken = refreshToken;
      console.log('요청 보냄', config);
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 받을 때 성공/실패에 따른 토큰 재발급
instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log('응답 실패 ', error);
    const { config, response } = error;
    const status = response ? response.status : null;
    console.log(status);
    const originalConfig = config;

    if (status === 401) {
      console.log('토큰 만료 진입');
      // if (response.data === 'Invalid Refresh Token') {
      try {
        const { data } = await axios.post(
          'http://localhost:8080/members/reissue',
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              RefreshToken: Cookies.get('refreshToken'),
            },
          }
        );

        //새로운 토큰 저장
        const newAccessToken = data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        originalConfig.headers.authorization = `Bearer ${newAccessToken}`;
        return axios(originalConfig);
      } catch (error) {
        console.log('토큰 갱신 에러');
        logout();
        return Promise.reject(error);
      }
      // } else {
      //   console.log('토큰 갱신 ');
      //     logout();
      //     return Promise.reject(error);
      // }
    } else if (status === 404) {
      window.alert('404 error');
    }

    return Promise.reject(error);
  }
);

export default instance;
