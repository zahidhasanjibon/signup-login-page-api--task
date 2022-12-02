import { useState } from 'react';
import './App.css';
import Attendence from './assignment/Attendence';
import SignLoginForm from './assignment/SignLoginForm';

export default function App() {
    // if register ot login happen show attendence component
    const [isAttendenceShow, setIsAttendenceShow] = useState(null);
    return (
        <div className="container lg:h-[100vh] mx-auto">
            {isAttendenceShow ? (
                <Attendence attendenceData={isAttendenceShow} />
            ) : (
                <SignLoginForm whatToShow={setIsAttendenceShow} />
            )}
        </div>
    );
}
