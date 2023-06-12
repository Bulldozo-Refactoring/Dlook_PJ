import React from "react";
import google from "assets/images/google.png";

function Login() {
  return (
    <>
      <div id="login">
        <div class="login-wrapper">
          <h2>Login</h2>
          <form action="/login" method="post" id="login-form">
            <input type="text" name="userName" placeholder="Email" />
            <input type="password" name="userPassword" placeholder="Password" />
            <input type="submit" value="Login" />
            <p>
              <button>
                <img src={google} alt="구글 로그인" />
              </button>
              <button id="searchpassword">비밀번호 찾기</button>
            </p>
          </form>
          <div id="firstvisit">
            Dlook이 처음이신가요?
            <button id="signup">회원가입</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
