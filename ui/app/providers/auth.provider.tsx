import { User, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import authService from "../services/firebase/auth.service";

type AuthProviderState = {
    isAuthenticated: boolean;
    user: User | null;
}


export const AuthContext = createContext<AuthProviderState>({isAuthenticated: false, user: null});

const AuthProvider = ({children}: any) => {
    const [authStatus, setAuthStatus] = useState<AuthProviderState>({isAuthenticated: false, user: null});

    useEffect(() => {
        const auhtInstance = authService.getAuthInstance();
        onAuthStateChanged(auhtInstance, (user) => {
            if(user) {
                setAuthStatus({user: user, isAuthenticated: true});
            } else {
                setAuthStatus({ user: null, isAuthenticated: false })
            }
        })
    }, []);

    return (
        <AuthContext.Provider value={authStatus}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;