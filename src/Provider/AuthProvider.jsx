import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../FireBase/Firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    //signUp

    const creatUser = (email, password, username, useUrl) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //photourl

    const updateUserProfile = (username, useUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: useUrl
        })
    }

    //login 
    const login = ( email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //onauth change
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,

        creatUser,
        updateUserProfile,
        login
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;