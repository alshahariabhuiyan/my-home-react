import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../../../firebase.config'




export const AuthContext = createContext(null)


// const firebaseApp = initializeApp(firebaseConfig)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const Auth = getAuth(app)


    const handleGoogle = () => {
        return signInWithPopup(Auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logOut = () => {
        return signOut(Auth)
    }
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        handleGoogle,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;