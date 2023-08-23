import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    console.log(user)

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
            setLoading(false);
            setUser(currentUser)

            // get and set token
            if(currentUser){
                axios.post('https://netpay-server-muhammadali246397.vercel.app/jwt', {email: currentUser.email})
                .then(data => {
                console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                })
            
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const updateUserProfile = ((name, photo, number) => {
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo,
            phoneNumber:number
            

        })
    })


    const userInfo = {
        user,
        handleSignUp,
        handleLogin,
        handleLogOut,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;