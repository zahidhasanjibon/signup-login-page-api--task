import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
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
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        return signOut(auth);
    };
    const updateProfileName = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    };
    const loginWithgoogle = () => {
        const Provider = new GoogleAuthProvider();
        return signInWithPopup(auth, Provider);
    };
    const loginWithFacebook = () => {
        const Provider = new FacebookAuthProvider();
        return signInWithPopup(auth, Provider);
    };
    const loginWithGithub = () => {
        const Provider = new GithubAuthProvider();
        return signInWithPopup(auth, Provider);
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
        loginWithGithub
    };

    return (
        <userContext.Provider value={userInfo}>{children}</userContext.Provider>
    );
}
