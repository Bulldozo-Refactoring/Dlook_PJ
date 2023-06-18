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
    const accessToken = config.authorization;
    config.authorization = `Bearer ${accessToken}`;

    console.log('요청 넘김요 ', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 받을 때 성공/실패에 따른 토큰 재발급
instance.interceptors.response.use(
  function (response) {
    console.log('instance 응답 성공옴 ', response);
    return response;
  },
  async (error) => {
    console.log('instance 응답 실패옴 ', error);

    // 요청 하고 오는 응답이 실패해서 아직 작업 X
    const originalConfig = error.config;
    const accessToken = originalConfig.authorization;
    const refreshToken = Cookies.get('refreshToken');

    if (error.response.data === 'Invalid Refresh Token') {
      console.log('드디어 진입헀다..');
      try {
        const response = await axios.post('http://localhost:8080/members/reissue', null, {
          headers: { Authorization: accessToken, RefreshToken: refreshToken },
        });

        if (error.config) {
          console.log(error);
          const { accessToken, refreshToken } = response.data;

          localStorage.setItem('accessToken', accessToken);
          Cookies.set('refreshToken', refreshToken);

          originalConfig.headers.authorization = accessToken;

          return await instance.request(originalConfig);
        }
      } catch (error) {
        console.log('토큰 갱신 에러');
        logout();
        return Promise.reject(error);
      }
    }
    // 여기까지 작업 X
    return Promise.reject(error);
  }
);

export default instance;
