import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const userContext = React.createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
export default function UserContext({ children }) {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const [isResetError, setIsResetError] = useState('');
    console.log(user);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };
    const updateProfileName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    };
    const loginWithgoogle = () => {
        setIsLoading(true);
        const Provider = new GoogleAuthProvider();
        return signInWithPopup(auth, Provider);
    };
    const loginWithFacebook = () => {
        setIsLoading(true);
        const Provider = new FacebookAuthProvider();
        return signInWithPopup(auth, Provider);
    };
    const loginWithGithub = () => {
        setIsLoading(true);
        const Provider = new GithubAuthProvider();
        return signInWithPopup(auth, Provider);
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    useEffect(() => {
        const subs = onAuthStateChanged(auth, (userinfo) => {
            if (userinfo) {
                setIsLoading(false);
                setUser(userinfo);
            } else {
                setIsLoading(false);
                setUser({});
            }
        });
        return () => {
            subs();
        };
    }, []);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const userInfo = {
        user,
        signUp,
        signIn,
        updateProfileName,
        logOut,
        isLoading,
        loginWithgoogle,
        loginWithFacebook,
        loginWithGithub,
        setIsLoading,
        isError,
        setIsError,
        forgotPassword,
        isResetError,
        setIsResetError,
        verifyEmail
    };

    return (
        <userContext.Provider value={userInfo}>{children}</userContext.Provider>
    );
}
