import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import facebookLogo from '../assets/img/icons8-facebook-48.png';
import githubLogo from '../assets/img/icons8-github-50.png';
import googleLogo from '../assets/img/icons8-google-48.png';
import { userContext } from './UserContext';

export default function Register() {
    const [isError, setIsError] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [imagePreview, setImgPreview] = useState('');
    const {
        signUp,
        updateProfileName,
        loginWithgoogle,
        loginWithFacebook,
        loginWithGithub,
        verifyEmail
    } = useContext(userContext);

    const navigate = useNavigate();
    const nameRef = useRef(null);

    const sendveryfyEMail = () => {
        verifyEmail()
            .then(() => {
                toast.success('please verify your email');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleFileUpload = (e) => {
        console.log('iii');
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgPreview(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
            .then(() => {
                form.reset();
                navigate('/');
                updateProfileName(name)
                    .then(() => {
                        sendveryfyEMail();
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                setIsError(err.message);
                console.log(err);
            });
    };

    const handleLoginWithGoogle = () => {
        loginWithgoogle()
            .then(() => {
                navigate('/');
                sendveryfyEMail();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleLoginWithFacebook = () => {
        loginWithFacebook()
            .then(() => {
                navigate('/');
                sendveryfyEMail();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(() => {
                navigate('/');
                sendveryfyEMail();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="hero h-[91vh] bg-base-200">
            <div className="hero-content flex-col w-[370px]">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="px-6 py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                ref={nameRef}
                                type="text"
                                name="name"
                                placeholder="name"
                                required
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                required
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />

                            <input
                                // eslint-disable-next-line no-undef
                                onChange={(e) => handleFileUpload(e)}
                                className="mt-3 mb-2 border border-gray-500 block w-full text-sm text-gray-900 bg-slate-500 rounded-lg  cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700  dark:placeholder-gray-400"
                                id="file_input"
                                type="file"
                                accept="image/*"
                            />

                            <label className="label">
                                <NavLink
                                    to="/login"
                                    className="label-text-alt link link-hover"
                                >
                                    have an account?
                                </NavLink>
                            </label>
                            {isError && <p>{isError}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mx-auto" id="or">
                        or
                    </div>

                    <div className="mx-auto flex justify-center pb-5">
                        <div className="go p-2 rounded-md">
                            <button onClick={handleLoginWithGoogle}>
                                <img
                                    className="cursor-pointer"
                                    src={googleLogo}
                                    alt=""
                                />
                            </button>
                        </div>
                        <div className="fa p-2 rounded-md mx-4">
                            <button onClick={handleLoginWithFacebook}>
                                <img
                                    className="cursor-pointer"
                                    src={facebookLogo}
                                    alt=""
                                />
                            </button>
                        </div>
                        <div className="git p-2 rounded-md">
                            <button onClick={handleLoginWithGithub}>
                                <img
                                    className="cursor-pointer"
                                    src={githubLogo}
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
