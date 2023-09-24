import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import History from './History'
import { Navbar } from '../Components'
import ThemeProvider from '../context/ThemeProvider'

function Router() {
  const {currentTheme} = useContext(ThemeProvider);
  return (
    <div data-theme={currentTheme}>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/history' element={<History/>}/>
    </Routes>
    </div>
  )
}

export default Router;
