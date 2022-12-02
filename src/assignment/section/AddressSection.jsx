/* eslint-disable react/prop-types */
export default function AddressSection({ handleInputFiled, userData }) {
    return (
        <form className="flex flex-col mt-24">
            <div className="flex gap-2">
                <input
                    disabled
                    type="text"
                    placeholder="+880"
                    className="my-8 pl-4 w-1/5"
                />
                <input
                    name="phone_number"
                    type="number"
                    placeholder="1xxxxxxxxxxx"
                    className="my-8 px-4 w-4/5"
                    onChange={handleInputFiled}
                    value={userData.phone_number}
                />
            </div>

            <input
                name="email"
                type="email"
                placeholder="Write Email Address"
                className="my-8 px-4"
                onChange={handleInputFiled}
                value={userData.email}
            />
        </form>
    );
}
