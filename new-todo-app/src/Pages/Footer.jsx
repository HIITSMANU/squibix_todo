import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import "./Footer.css"

const Footer = () => {

    const {theme} = useTheme()
  return (
    <>
        <footer className={`w-full ${theme === 'light' ? 'bg-white':'bg-gray-800 text-white'}  text-center`}>
            <span>Made with <i class="fa fa-heart pulse text-red-700 text-[10px]"></i> by S.Manohar</span>
        </footer>
    </>
  )
}

export default Footer
