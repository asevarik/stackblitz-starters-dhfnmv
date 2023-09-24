import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeProvider from '../../context/ThemeProvider';
import { Moon, Sun } from 'react-feather';
function Navbar() {
  const {currentTheme,setCurrentTheme} = useContext(ThemeProvider);
  const [isDark,setIsDarkTheme] = useState<boolean>(currentTheme!=="light");
  const handleDarkMode = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) =>{
    setIsDarkTheme(!isDark)
    if(currentTheme == "light"){
      setCurrentTheme("dark"); 
    }else{
      setCurrentTheme("light"); 
    }
    
  }
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Github Explorer</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal pr-11">
      <li><Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link></li>
      <li><Link to="/history" className="btn btn-ghost normal-case text-xl">History</Link></li>
      <li>
      <div className='flex gap-3'>
      <Sun/>
    <input type="checkbox" className="toggle" checked={isDark} onClick={handleDarkMode}/>
    <Moon/>
    </div>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
