import React, {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [showPost, setShowPost] = useState(false);
    const [isQuestion, setIsQuestion] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isSpace, setIsSpace]=useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if(storedUser){
            setCurrentUser(storedUser);
        }
    }, []);
    const login = (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        setCurrentUser(user);
    }
    const logout = () => {
        localStorage.removeItem('currentUser')
        setCurrentUser(null);
    }
    return(
        <AuthContext.Provider value={{showPost, setShowPost, isQuestion, setIsQuestion, currentUser, setCurrentUser, login, logout, isSpace, setIsSpace}}>
            {children}
        </AuthContext.Provider>
    )
}