/* eslint-disable react/prop-types */
export default function NameSection({ handleInputFiled, userData }) {
    return (
        <form className="flex flex-col mt-24">
            <input
                name="first_name"
                onChange={handleInputFiled}
                type="text"
                placeholder="Write First Name"
                className="my-8 px-4"
                value={userData.first_name}
            />
            <input
                name="last_Name"
                onChange={handleInputFiled}
                type="text"
                placeholder="Write Last Name"
                className="my-8 px-4"
                value={userData.last_Name}
            />
        </form>
    );
}
