export default function ForgotPassword() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Forgot password!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
