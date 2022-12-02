/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';

export default function LoginForm({ setIsLoginShow,showAttendenceAfterLogIn }) {
    const [passwordError, setPasswordError] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
            // set input value
    const handleInputFiled = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
            // validate password
    const checkPasswordLength = (e) => {
        if (e.target.value.length >= 8) {
            setPasswordError(false);
        }
    };

            // fetch all users
        const fetchAllUsers = (token) => {
                fetch("https://test.nexisltd.com/test",{
                    headers: {
                        authorization: `bearer ${token}`,
                      },
                })
                .then(res => res.json())
                .then(d => {
                    showAttendenceAfterLogIn(d)
                })
                .catch(err => console.log(err))
            
        }

        // login function post request

    const LoginFormPostRequest = () => {
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((d) => {
                fetchAllUsers(d.access_token)
            })
            .catch((er) => console.log(er));
    };

        // login func
    const handleLogin = () => {
        if (userData.password.length < 8) {
            setPasswordError(true);
            return;
        }
        if(userData.email === "")return
        LoginFormPostRequest()
    };




    return (
        <div className="w-full lg:w-2/5 flex flex-col py-12 px-8 lg:px-24 form-card">
            <h3 className="text-2xl font-bold text-center pt-12">
                Log In Form
            </h3>

            <form className="flex flex-col mt-24">
                <input
                    name="email"
                    onBlur={handleInputFiled}
                    type="email"
                    placeholder="Write Email Address"
                    className="my-8 px-4"
                />
                <input
                    name="password"
                    onBlur={handleInputFiled}
                    type="password"
                    placeholder="Write Password"
                    className="my-8 px-4"
                    onChange={checkPasswordLength}
                />
                {passwordError && (
                    <label className="pass-label ml-4 pt-1">
                        Your password must be 8 character
                    </label>
                )}
            </form>

            <div className="text-center mt-16">
                <button onClick={handleLogin} className="login-btn">
                    Log In
                </button>
            </div>
            <div className="mt-24 mr-10">
                <p className="footer-text">
                    Don’t have an account?
                    <span
                        onClick={() => setIsLoginShow(false)}
                        className="login-text"
                    >
                        SIGNUP HERE
                    </span>
                </p>
            </div>
        </div>
    );
}
