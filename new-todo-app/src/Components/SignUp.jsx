// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost:5000/users', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         });
//         if (response.ok) {
//             navigate('/signin');
//         } else {
//             alert('Sign Up Failed');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-3">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">SignUp</h2>
//         <form onSubmit={handleSignUp} className="space-y-6">
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
//             SignUp
//           </button>
//         </form>
//       </div>
//     </div>
//     );
// };

// export default SignUp;
