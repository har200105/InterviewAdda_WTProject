import React from 'react';
import Header from '../Component/Header';
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import '../styles/Login.css';
import { quesAPI } from '../API';
import { useNavigate } from 'react-router';

const Login = ({refresh}) => {
    const navigate = useNavigate();
    const clientId = "158290556556-n5sop2t8jol8g086uj8togh0m6jaik1q.apps.googleusercontent.com";
    const onLoginSuccess = async (res) => {
        const log = await axios.post(`${quesAPI}/login`,res.profileObj);
        if(log.status===201){
            console.log(log);
            localStorage.setItem("jwt", log.data.token);
            navigate('/');
        }
       
        // console.log('Login Success:', res.profileObj);

    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    return (
        <>
            <Header />
            <div className="login_box">
                <h4 className="login_header"> Please Login To Contribute Questions {refresh &&
                <p>If You Have Logged In Already , Refresh This Page </p>
            } </h4>
                <GoogleLogin
                    className="google_login"
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                {/* <GoogleLogout
                    buttonText="Logout"
                /> */}






            </div>
        </>
    )
}

export default Login
