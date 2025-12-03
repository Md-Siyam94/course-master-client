import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from '../custom hooks/useAxiosPublic';
export const AuthContex = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const provider = new GoogleAuthProvider();

    // sign up user
    const singUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUpWithGoogle =()=>{
        return signInWithPopup(auth, provider)
    }

    // update user profile
    const updateUserProfile =(userData)=>{
        return updateProfile(auth.currentUser, userData)
    }


    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
             setUser(currentUser)
            if(currentUser){
                const user = {email: currentUser?.email}
                axiosPublic.post("/jwt",user )
                .then(res=>{
                    if(res.data?.token){
                        setLoading(false)
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            }else{
                setLoading(false)
                localStorage.removeItem('access-token')
            }
           
        })

        return () => {
            return unsubscribe()
        }
    }, [])


    const info = {
        name: "siyam",
        user,
        loading,
       signUpWithGoogle,
       updateUserProfile,
        loginUser,
        singUpUser,
        logout,


    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;