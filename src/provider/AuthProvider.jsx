import React, { createContext, useState } from 'react';

export const AuthContex = createContext()

const AuthProvider = ({children}) => {
    const {user, setUser} = useState({})


    const info = {
        name: "siyam"
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;