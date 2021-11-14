import React from 'react';
import Header from '../Component/Header';
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import '../styles/Login.css';

const Login = () => {
    const clientId = "535325305595-r7f1qfq5g8l6ll96abhps7nr327q328b.apps.googleusercontent.com";
    const onLoginSuccess = async (res) => {
        localStorage.setItem("user", res.profileObj);
        console.log('Login Success:', res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    return (
        <>
            <Header />
            <div className="login_box">
                <h4 className="login_header"> Please Login To Add Question </h4>
                <GoogleLogin
                    className="google_login"
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                />
                {/* <GoogleLogout
                    buttonText="Logout"
                /> */}






            </div>
        </>
    )
}

export default Login
