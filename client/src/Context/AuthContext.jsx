import React, { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in by checking for a valid token
    const token = localStorage.getItem("authToken"); // or cookies, depending on your implementation
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Simulate login/logout (replace these with real API calls)
  const login = (token) => {
    localStorage.setItem("authToken", token); // Save token in localStorage or cookies
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token on logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
