import React from 'react';
import google from '../../assets/images/google.png';

function Login() {
    //const [message, setMessage] = useState("");

    // useEffect(() => {
    //     fetch('/test')
    //         .then(response => response.text())
    //         .then(message => {
    //             setMessage(message);
    //         });
    // }, [])

    return (
        <>
        <div id="login">
            <div class="login-wrapper">
                <h2>Login</h2>
                <form action="/login" method="post" id="login-form">
                    <input type="text" name="userName" placeholder="Email"/>
                    <input type="password" name="userPassword" placeholder="Password"/>
                    <input type="submit" value="Login"/>
                    <p>
                        <button><img src={google}/></button>
                        <button id="searchpassword" onclick="location.href='searchpassword.html'" type="button">비밀번호 찾기</button>
                    </p>
                </form>
                <div id="firstvisit">
                Dlook이 처음이신가요? <button id="signup" onclick="location.href='signup.html'" type="button">회원가입</button>
                </div>
            </div>        
        </div>
        </>
    );
}

export default Login;