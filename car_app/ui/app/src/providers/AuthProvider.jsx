import { createContext, useState } from "react";


export const AuthContext = createContext();

export const ThemeContext = createContext({type: 'Light'});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    const [type, setType] = useState('Light');

    const db = {login: 'admin123', password: '12345'};

    return (
        <AuthContext.Provider value={{user, setUser, admin, setAdmin, db}}>
            <ThemeContext.Provider value={{type, setType}}>
                {children}
            </ThemeContext.Provider>
        </AuthContext.Provider>
    );
}

