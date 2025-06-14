import React,{ useEffect, useState } from 'react';
import './App.css'

import Header from '@components/Header/Header.tsx';  
import Main from '@components/Main/Main.tsx';
import Footer from '@components/Footer/Footer.tsx';


  const App: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkTheme(prefersDarkScheme);
        updateTheme(prefersDarkScheme);
    }, []);
    const updateTheme = (isDark: boolean) => {
        const body = document.body; 
        if (isDark) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    };
    const handleToggle = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        updateTheme(newTheme);
    };
    return (
      <>
        <Header isDarkTheme = {isDarkTheme} onToggleTheme = {handleToggle}/>
        <Main/>
        <Footer theme = {isDarkTheme}/>
      </>
    );
  };
  export default App;