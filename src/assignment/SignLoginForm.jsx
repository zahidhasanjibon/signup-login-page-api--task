/* eslint-disable react/prop-types */

import { useState } from 'react';
import img from '../assets/img/istockphoto-1321277096-612x612 1.png';
import logo from '../assets/img/ultimate hrm logo-05-02 2.png';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function SignLoginForm({ whatToShow }) {
    // for which form to show login or sign up
    const [isLoginShow, setIsLoginShow] = useState(false);
    return (
        <div className="flex items-center h-full">
            <div className="flex flex-col lg:flex-row px-8 w-full">
                <div className="left-img w-full lg:w-3/5 text-center pl-12  pt-8">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <img className="inline img" src={img} alt="" />
                </div>

                {isLoginShow ? (
                    <LoginForm
                        setIsLoginShow={setIsLoginShow}
                        showAttendenceAfterLogIn={whatToShow}
                    />
                ) : (
                    <SignUpForm
                        setIsLoginShow={setIsLoginShow}
                        showAttendenceAfterSignIn={whatToShow}
                    />
                )}
            </div>
        </div>
    );
}
