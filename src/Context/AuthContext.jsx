import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(Cookies.get('jwtToken') || '');

    const login = (jwtToken) => {
        Cookies.set('jwtToken', jwtToken);
        setToken(jwtToken);
    };

    const logout = () => {
        Cookies.remove('jwtToken');
        setToken('');
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
