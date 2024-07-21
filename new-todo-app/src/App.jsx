import React, { useContext } from "react";
import Todo from "./Components/Todo";
import Navbar from "./Components/Navbar";
import { useTheme } from "./Contexts/ThemeContext";
import { AuthContext } from "./Contexts/AuthContext";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";

const App = () => {
  const { theme } = useTheme();
  const { user } = useContext(AuthContext);
  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } grid h-screen py-2`}
    >
      <Navbar />
      {!user ? (
        <Login />
      ) : (
        <>
          <Todo />
        </>
      )}
      <Footer/>
    </div>
  );
};

export default App;
