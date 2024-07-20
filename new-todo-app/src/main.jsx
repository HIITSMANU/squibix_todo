import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { TodoProvider } from './Contexts/TodoContext.jsx'
import { AuthProvider } from './Contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
    </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
