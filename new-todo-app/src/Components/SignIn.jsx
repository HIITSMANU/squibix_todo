// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignIn = ({ setAuthUser }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         const response = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
//         const users = await response.json();
//         if (users.length > 0) {
//             setAuthUser(users[0]);
//             localStorage.setItem('authUser', JSON.stringify(users[0]));
//             navigate('/todos');
//         } else {
//             alert('Sign In Failed');
//         }
//     };

//     return (
      
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-3">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">SignIn</h2>
//         <form onSubmit={handleSignIn} className="space-y-6">
//           <div>
//             <label className="block text-gray-700">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//     );
// };

// export default SignIn;
