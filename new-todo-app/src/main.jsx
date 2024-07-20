import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import { TodoProvider } from './Contexts/TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <App />
    </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
