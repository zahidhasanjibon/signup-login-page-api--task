/* eslint-disable react/prop-types */
export default function PasswordSection({
    handleInputFiled,
    error,
    fixError,
    userData
}) {
    const checkPasswordLength = (e) => {
        if (e.target.value.length >= 8) {
            fixError(false);
        }
    };

    return (
        <form className="flex flex-col mt-24">
            <input
                name="password"
                onChange={handleInputFiled}
                onKeyUp={checkPasswordLength}
                type="password"
                placeholder="Write Password"
                className="px-4"
                value={userData.password}
            />
            {error && (
                <label className="pass-label ml-4 pt-1">
                    Your password must be 8 character
                </label>
            )}
        </form>
    );
}
