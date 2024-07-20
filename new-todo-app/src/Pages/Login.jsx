// src/components/Login.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useTheme } from '../Contexts/ThemeContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const {theme} = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(username, password)) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`min-h-screen m-2  flex items-center justify-center  shadow-lg ${theme === 'light' ? 'bg-white' :'bg-gray-800'}p-3`}>
      <div className={`relative w-full max-w-md mb-[10%] ${theme === 'light'? 'bg-white border-2 border-gray-500':'bg-gray-800 border-2 '}  p-8 rounded-lg shadow-md`}>
        <div className={`border-2 rounded-full text-center h-20 w-20 mx-auto p-5 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}  absolute -top-10 left-[40%]`}>
            <i  className="fa-solid fa-users text-[30px]"></i>
        </div>
        <br />
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'light'? 'text-black' : 'text-white'}`}>Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block ${theme === 'light' ? 'text-gray-700':'text-white'}`}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light'? 'bg-white border-1' : 'bg-gray-800 border-1'}`}
            />
          </div>
          <div>
            <label className={`block ${theme === 'light' ? 'text-gray-700':'text-white'}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'light'? 'bg-white border-1' : 'bg-gray-800 border-1'}`}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
