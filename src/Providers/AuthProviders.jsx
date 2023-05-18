import React, { createContext, useState } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);



    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged (auth, loggedUser => {
    //         console.log('logged in user inside auth state observer', loggedUser);
    //         setUser(loggedUser);
    //         setLoading(false);
    //     })
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])

    const authInfo = {
        user,
        // loading,
        // gProvider,
        // gitProvider,
        // createRegister,
        // createLogin,
        // logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;