import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import facebookLogo from '../assets/img/icons8-facebook-48.png';
import githubLogo from '../assets/img/icons8-github-50.png';
import googleLogo from '../assets/img/icons8-google-48.png';
import { userContext } from './UserContext';

export default function Register() {
    const {
        signUp,
        updateProfileName,
        loginWithgoogle,
        loginWithFacebook,
        loginWithGithub
    } = useContext(userContext);

    const navigate = useNavigate();

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
                    .then(() => {})
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    const handleLoginWithGoogle = () => {
        loginWithgoogle()
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleLoginWithFacebook = () => {
        loginWithFacebook()
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(() => {
                navigate('/');
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
                            <label className="label">
                                <NavLink
                                    to="/login"
                                    className="label-text-alt link link-hover"
                                >
                                    have an account?
                                </NavLink>
                            </label>
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
