import React from 'react'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    
    <div className='bg-slate-400 grid h-screen'>
      <Navbar/>
      <Todo/>
    </div>
  )
}

export default App
