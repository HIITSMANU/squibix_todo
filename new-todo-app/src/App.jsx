import React from 'react'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    
    <div className='bg-slate-400 grid h-screen'>
      <Navbar/>
      <hr />
      <Todo/>
    </div>
  )
}

export default App
