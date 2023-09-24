import { BrowserRouter } from 'react-router-dom';
import Router from './Pages/Router';
import ThemeProvider, { getIntialTheme } from './context/ThemeProvider';
import { useState } from 'react';

function App() {
  const [currentTheme,setCurrentTheme] = useState<string>(getIntialTheme());
  return (
    <ThemeProvider.Provider value={{currentTheme,setCurrentTheme}}>
   <BrowserRouter>
    <Router/>
   </BrowserRouter>
   </ThemeProvider.Provider>
  );
}

export default App;
