//import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

function SignUp() {

    return (
        <div className="signup-template">
        
        <div className="title">
            User SignUp
        </div>
        <form action="/user/signup" method="post">
            <div className="input-wrapper">
                아이디: <input type="text" name="userName" placeholder="userName" />
                비밀번호 :<input type="password" name="userPW" placeholder="password" />
            </div>
            <button type="submit">회원가입</button>
        </form>
    </div>
            
        
    );
}

export default SignUp;
=======
=======
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
import React from "react";

function SignUp() {
  return (
    <div className="signup-template">
      <div className="title">User SignUp</div>
      <form action="/user/signup" method="post">
        <div className="input-wrapper">
          아이디: <input type="text" name="userName" placeholder="userName" />
          비밀번호 :
          <input type="password" name="userPW" placeholder="password" />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

<<<<<<< HEAD
export default SignUp;
>>>>>>> main
=======
export default SignUp;
>>>>>>> c421a960b56740ed674a459d776dba36234e78ee
