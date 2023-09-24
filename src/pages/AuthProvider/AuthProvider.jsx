import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            // get and set token
            if (currentUser) {
                fetch('https://eager-getup-colt.cyclic.cloud/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({ email: currentUser.email })
                }).then(res => res.json())
                    .then(data => {
                    localStorage.setItem('access-token', data.token)
                    setLoading(false);
                })
            }else {
                // localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsubscribe()
        }
    }, []);

    const updateUserProfile = ((name, photo, number) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            phoneNumber: number


        })
    })


    const userInfo = {
        user,
        handleSignUp,
        handleLogin,
        handleLogOut,
        updateUserProfile,
        loading,
        // userInfor
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;