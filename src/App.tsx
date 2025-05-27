import React from 'react';
import './App.css'

import Header from './components/Header/Header.tsx';  
import Main from './components/Main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';


  const App: React.FC = () => {
    return (
      <>
        <Header />
        <Main/>
        <Footer/>
      </>
    );
  };
  export default App;