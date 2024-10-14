import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            // Decode the token to extract user info
            const decodedUser = JSON.parse(atob(token.split('.')[1]));
            setUser(decodedUser);
        }
    }, [token]);

    const login = (token, user) => {
        localStorage.setItem('token', token); // Store token in localStorage
        setToken(token); // Set token in state
        setUser(user); // Set user in state
    };

    const logout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setToken(null); // Clear token from state
        setUser(null); // Clear user from state
    };

    const signUp = async ({ name, email, password }) => {
        const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to sign up');
        }

        const data = await response.json();
        login(data.token, data.user); // Call login with received token and user data
        return data; // Optionally return the user data or token
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
