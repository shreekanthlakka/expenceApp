import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authenticatedUser, setAuthenticatedUser] = useState({});

    return (
        <AuthContext.Provider
            value={{ authenticatedUser, setAuthenticatedUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error("QuizContext was used outside of the QuizProvider");
    return context;
}

export { useAuth, AuthProvider };
