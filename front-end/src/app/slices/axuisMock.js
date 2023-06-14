// 가상 서버
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Axios 인스턴스 생성
const axiosInstance = axios.create();

// MockAdapter 인스턴스 생성
const mock = new MockAdapter(axiosInstance);

mock.onPost("http://localhost:8080/member/join").reply(200, {
  // 200 상태 코드와 함께 가짜 응답 데이터를 반환
  member_seq: 1,
  member_name: "exampleUser",
  member_email: "example@example.com",
});

mock.onPost("http://localhost:8080/member/login").reply(200, {
  member_seq: 2,
  member_name: "exampleUser",
  member_email: "example@example.com",
  member_pw: "exampleUser",
});

mock.onPost("http://localhost:8080/member/logout").reply(200);

axiosInstance
  .post("http://localhost:8080/member/login", {
    member_email: "example@example.com",
    member_pw: "password",
  })
  .then((response) => {
    console.log(response.data); // 가짜 응답 데이터 출력
  })
  .catch((error) => {
    console.error(error);
  });

export default axiosInstance;