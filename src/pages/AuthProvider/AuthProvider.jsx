import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Config';

 export const AuthContext = createContext();
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loading, setLoading]= useState(true);
    const [users, setUser]= useState(null);
    console.log(users)

    const handleSignUp = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handlelogOut = () => {
        setLoading(true);
        return signOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setLoading(false);
            setUser(currentUser)
        })
        return ()=> {
            return unsubscribe()
        }
    },[])


    const userInfo ={
        users,
        handleSignUp,
        handleLogin,
        handlelogOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;