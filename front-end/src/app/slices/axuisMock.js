// 가상 서버
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Axios 인스턴스 생성
const axiosInstance = axios.create();

// MockAdapter 인스턴스 생성
const mock = new MockAdapter(axiosInstance);

mock.onPost('http://localhost:8080/members/join').reply(200, {
  message: 'join success',
  memberSeq: 1,
  memberName: 'exampleUser',
  memberEmail: 'example@example.com',
});

mock.onPost('http://localhost:8080/members/login').reply(200, {
  memberSeq: 2,
  memberName: 'exampleUser',
  memberEmail: 'example@example.com',
  memberPw: 'exampleUser',
  certify: true,
});

mock.onPatch('http://localhost:8080/members/logout').reply(200);

axiosInstance
  .post('http://localhost:8080/members/login', {
    memberEmail: 'example@example.com',
    memberPw: 'password',
  })
  .then((response) => {
    console.log(response.data); // 가짜 응답 데이터 출력
  })
  .catch((error) => {
    console.error(error);
  });

export default axiosInstance;
