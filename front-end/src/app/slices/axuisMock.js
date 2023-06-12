// 가상 서버
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Axios 인스턴스 생성
const axiosInstance = axios.create();

// MockAdapter 인스턴스 생성
const mock = new MockAdapter(axiosInstance);

mock.onPost("http://localhost:8080/member/join").reply(200, {
  id: 1,
  username: "exampleUser",
  email: "example@example.com",
  password: "exampleUser",
});

mock.onPost("http://localhost:8080/member/login").reply(200, {
  id: 1,
  username: "exampleUser",
  email: "example@example.com",
});

mock.onPost("http://localhost:8080/member/logout").reply(200);

axiosInstance
  .post("http://localhost:8080/member/login", {
    username: "testuser",
    password: "password",
  })
  .then((response) => {
    console.log(response.data); // 가짜 응답 데이터 출력
  })
  .catch((error) => {
    console.error(error);
  });

export default axiosInstance;
