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

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user profile update
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // auth observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth currentUser', currentUser);
            setUser(currentUser)

            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token);
                    setLoading(false);
                })
            
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }
    }, []);

    // const [userInfor, setUserInfor] = useState();
    // console.log(userInfor)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allUsers/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data =>setUserInfor(data))
    // },[user])

    // const updateUserProfile = ((name, photo, number) => {
    //     return updateProfile(auth.currentUser,{
    //         displayName:name,
    //         photoURL:photo,
    //         phoneNumber:number
            

    //     })
    // })


    const userInfo = {
        user,
        createUser,
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