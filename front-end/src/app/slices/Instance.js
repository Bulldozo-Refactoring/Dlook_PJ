import axios from 'axios';
import Cookies from 'js-cookie';
import { logout } from './CookieSlice';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-type': 'application/json', withCredentials: true },
});

// 요청할 때 accesstoken 게속 휘리릭 보내기
instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');

    console.log(config);
    config.headers.authorization = `Bearer ${accessToken}`;

    console.log('요청 넘김요 ', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답받을 때 만료된 경우 휘리릭
instance.interceptors.response.use(
  function (response) {
    console.log('instance 응답 성공옴 ', response);

    return response;
  },
  async (error) => {
    console.log('instance 응답 실패옴 ', error.response);
    const originalConfig = error.config;
    const headers = {
      Authorization: localStorage.getItem('accessToken'),
      RefreshToken: Cookies.get('refreshtoken'),
    };
    if (error.response.data === 'Invalid Refresh Token') {
      const accessToken = originalConfig.headers.Authorization;
      try {
        const response = await axios.post('http://localhost:8080/members/reissue', null, { headers });

        if (response.data) {
          console.log(response.data);
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          Cookies.set('refreshToken', refreshToken);

          originalConfig.headers.Authorization = `Bearer ${accessToken}`;
          originalConfig.headers.RefreshToken = refreshToken;

          return await instance.request(originalConfig);
        }
      } catch (error) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

function isTokenExpired(token) {
  if (!token) return true; // 토큰이 없는 경우 만료
}

export default instance;

// instance.interceptors.response.use(
//   function (response) {
//     console.log('instance 응답 성공옴 ', response);

//     return response;
//   },
//   async (error) => {
//     console.log('instance 응답 실패옴 ', error.response);
//     const originalConfig = error.config;
//     const headers = {
//       Authorization: localStorage.getItem('accesstoken'),
//       RefreshToken: Cookies.get('refreshtoken'),
//     };
//     if (error.response.data === 'Invalid Refresh Token') {
//       const accesstoken = originalConfig.headers['authorization'];
//       try {
//         const response = await axios.post('http://localhost:8080/members/reissue', null, { headers });

//         if (response.data) {
//           console.log(response.data);
//           const { accessToken, refreshToken } = response.data;
//           localStorage.setItem('accessToken', accessToken);
//           Cookies.set('refreshToken', refreshToken);

//           return await instance.request(originalConfig);
//         }
//       } catch (error) {
//         console.log('토큰 갱신 에러');
//       }
//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );

// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { refreshTokens, logout } from './CookieSlice';

// const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: { 'Content-type': 'application/json', withCredentials: true },
// });

// let isRefreshing = false; // 토큰 갱신 중인지 여부를 나타내는 플래그
// let failedRequests = []; // 갱신 중 실패한 요청을 저장하는 배열

// // 요청할 때 휘리릭
// instance.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const refreshToken = Cookies.get('refreshToken');

//     // 로그인 시 accessToken 유효한지 확인
//     if (accessToken) {
//       if (isTokenExpired(accessToken)) {
//         if (!isRefreshing) {
//           isRefreshing = true;
//           try {
//             console.log('갱신에 성공한 경우, 실패한 요청들을 재시도 ', config);
//             for (const request of failedRequests) {
//               request.headers.Authorization = `Bearer ${accessToken}`;
//               try {
//                 const response = await axios(request);
//                 request.resolve(response);
//               } catch (error) {
//                 request.reject(error);
//               }
//             }
//             failedRequests = [];
//           } catch (error) {
//             console.error('토큰 재발급 실패:', error);
//             logout();
//           }
//         }
//         // 갱신 중인 경우, 요청을 중지
//         return new Promise((resolve, reject) => {
//           failedRequests.push({ resolve, reject, config });
//         });
//       } else {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // 응답받을 때 할 때 휘리릭
// instance.interceptors.response.use(
//   function (response) {
//     console.log('instance 응답성공:', response);

//     return response;
//   },
//   async (error) => {
//     console.log('instance 응답실패:', error.response);
//     const originalRequest = error.config;

//     if (error.response.data === 'Invalid Refresh Token') {
//       originalRequest._retry = true;
//       try {
//         const { data } = await refreshTokens();
//         console.log(data);
//         const accessToken = data.accessToken;
//         const refreshToken = data.refreshToken;

//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//         originalRequest.headers.RefreshToken = refreshToken;
//         return axios(originalRequest);
//       } catch (refreshError) {
//         console.error('토큰 재발급 실패:', refreshError);

//         Cookies.set('isLoggedIn', false, { path: '/' });
//         logout();
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// function isTokenExpired(token) {
//   if (!token) return true; // 토큰이 없는 경우 만료

//   const tokenParts = token.split('.');

//   if (tokenParts.length !== 3) return true; // JWT 형식이 아닌 경우는 만료

//   try {
//     const payload = JSON.parse(atob(tokenParts[1]));

//     const expirationTime = payload.exp;
//     const currentTime = Math.floor(Date.now() / 1000);

//     return expirationTime < currentTime;
//   } catch (error) {
//     console.error('토큰 파싱 실패:', error);
//     return true; // 토큰 파싱에 실패한 경우도 만료로 처리
//   }
// }

// export default instance;
