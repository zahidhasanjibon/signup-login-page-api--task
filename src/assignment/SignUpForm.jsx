/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import toast from 'react-hot-toast';
import AddressSection from './section/AddressSection';
import NameSection from './section/NameSection';
import PasswordSection from './section/PasswordSection';

export default function SignUpForm({
    setIsLoginShow,
    showAttendenceAfterSignIn
}) {
    const [whichSectionToShow, setWhichSectionToShow] = useState(0);

    const [passwordError, setPasswordError] = useState(false);
    const initialUserData = {
        first_name: '',
        last_Name: '',
        email: '',
        phone_number: '',
        password: ''
    };
    const [userData, setUserData] = useState(initialUserData);

    const handleUserInputFiled = (e) => {
        e.preventDefault();
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // fetch all users
    const fetchAllUsers = (token) => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((d) => {
                showAttendenceAfterSignIn(d);
            })
            .catch((err) => console.log(err));
    };

    // login function post request after sign in complete

    const LoginFormPostRequest = () => {
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            })
        })
            .then((res) => res.json())
            .then((d) => {
                // if login success fetch all users
                fetchAllUsers(d.access_token);
            })
            .catch((er) => console.log(er));
    };

    // post requet to server for registration
    const RegisterFormPostRequest = () => {
        fetch('https://test.nexisltd.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((d) => {
                if (d.sucess) {
                    toast.success('registration successfull');
                    // if success login fucn call
                    LoginFormPostRequest();
                }
                if (d.error) {
                    toast.error(d.error);
                }
            })
            .catch((er) => console.log(er));
    };
    // sign up button submit form
    const handleSubmitForm = () => {
        if (userData.password.length < 8) {
            setPasswordError(true);
            return;
        }
        if (
            userData.first_name == '' ||
            userData.last_Name == '' ||
            userData.email == '' ||
            userData.phone_number == ''
        ) {
            return;
        }
        RegisterFormPostRequest();
    };

    return (
        <div className="w-full lg:w-2/5 flex flex-col py-12 px-8 lg:px-24 form-card">
            <h3 className="text-2xl font-bold text-center pt-12">
                SignUp Form
            </h3>
            {whichSectionToShow === 0 && (
                <NameSection
                    handleInputFiled={handleUserInputFiled}
                    userData={userData}
                />
            )}
            {whichSectionToShow === 1 && (
                <AddressSection
                    handleInputFiled={handleUserInputFiled}
                    userData={userData}
                />
            )}
            {whichSectionToShow === 2 && (
                <PasswordSection
                    handleInputFiled={handleUserInputFiled}
                    error={passwordError}
                    fixError={setPasswordError}
                    userData={userData}
                />
            )}

            <div className="text-center mt-16">
                {whichSectionToShow > 0 && (
                    <button
                        onClick={() =>
                            setWhichSectionToShow((prev) => prev - 1)
                        }
                        className="mr-24 back-btn"
                    >
                        back
                    </button>
                )}

                <div className="inline-block">
                    {whichSectionToShow <= 1 ? (
                        <button
                            onClick={() =>
                                setWhichSectionToShow((prev) => prev + 1)
                            }
                            className="btn flex mx-auto justify-between items-center"
                        >
                            Next Step
                            <span className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </span>
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmitForm}
                            className="signup-btn"
                        >
                            Sign Up
                        </button>
                    )}
                </div>
            </div>
            {whichSectionToShow === 0 && (
                <div className="mt-24 mr-10">
                    <p className="footer-text">
                        Already have an account?
                        <span
                            onClick={() => setIsLoginShow(true)}
                            className="login-text"
                        >
                            LOGIN HERE
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
