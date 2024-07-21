import React, { createContext, useState } from "react";
import users from "../users.json";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );

  const login = (username, password) => {
    const founduser = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(founduser);

    if (founduser) {
      setUser(founduser);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(founduser));
    }
    return founduser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
