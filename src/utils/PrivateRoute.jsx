import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../components/UserContext';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
    const { user, isLoading } = useContext(userContext);

    if (isLoading) {
        return <div className="text-2xl text-center">Loading.......</div>;
    }

    return user?.uid ? children : <Navigate to="/login" />;
}
