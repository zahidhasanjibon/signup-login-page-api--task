import { useContext } from 'react';
import toast from 'react-hot-toast';
import { userContext } from './UserContext';

export default function ForgotPassword() {
    const { forgotPassword, isResetError, setIsResetError } =
        useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgotPassword(email)
            .then(() => {
                setIsResetError('');
                e.target.reset();
                toast.success('reset email send please check');
            })
            .catch((err) => {
                setIsResetError(err.message);
                console.log(err);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Forgot password!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                required
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />

                            {isResetError && <p>{isResetError}</p>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
