import React from 'react'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'
import { useTheme } from './Contexts/ThemeContext'

const App = () => {
  const {theme} = useTheme()
  return (
    
    <div className={`${theme === 'light'?'bg-white':'bg-gray-800'} grid h-screen`}>
      <Navbar/>
      <hr />
      <Todo/>
    </div>
  )
}

export default App
