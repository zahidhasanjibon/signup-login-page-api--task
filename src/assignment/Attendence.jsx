/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
    AiOutlineSortAscending,
    AiOutlineSortDescending
} from 'react-icons/ai';
import logo from '../assets/img/ultimate hrm logo-05-02 2.png';

export default function Attendence({ attendenceData }) {
    const [toggleSort, setToggleSort] = useState(true);
    const [allData, setAllData] = useState(attendenceData);

    // for sort name
    const handleNameSort = () => {
        if (toggleSort) {
            const data = Object.values(attendenceData).sort((a, b) => {
                return b.id - a.id;
            });
            setAllData(data);
            setToggleSort(!toggleSort);
        } else {
            setAllData(attendenceData);
            setToggleSort(!toggleSort);
        }
    };
    return (
        <div className="px-4 lg:px-12 pt-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <h4 className="attendence-title w-64 md:w-96  text-white text-center mx-auto py-3">
                Attendence information
            </h4>

            <div className="flex px-4 lg:px-12 mt-20">
                <div className="w-1/3 text-center">
                    <h4 className="font-bold">Date</h4>
                </div>
                <div className="w-1/3 flex justify-center">
                    <span className="font-bold ">Employee Name</span>
                    {toggleSort ? (
                        <span
                            className="ml-2 mt-1 cursor-pointer"
                            onClick={handleNameSort}
                        >
                            <AiOutlineSortAscending size={20} />
                        </span>
                    ) : (
                        <span
                            className="ml-2 mt-1 cursor-pointer"
                            onClick={handleNameSort}
                        >
                            <AiOutlineSortDescending size={20} />
                        </span>
                    )}
                </div>
                <div className="w-1/3 text-center">
                    <h4 className="font-bold">Status</h4>
                </div>
            </div>

            {Object.values(allData).map((d) => (
                <div
                    className="flex px-4 lg:px-12 my-8 border-b-2 pb-4"
                    key={d.id}
                >
                    <div className="w-1/3 text-center">
                        <h4 className="">
                            {
                                d.attendance[Object.keys(d.attendance)[1]]
                                    .times[0]
                            }
                        </h4>
                    </div>
                    <div className="w-1/3 text-center">
                        <h4 className="">{d.username}</h4>
                    </div>
                    <div className="w-1/3 text-center">
                        <h4 className="">
                            {d.attendance[Object.keys(d.attendance)[1]].status}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
