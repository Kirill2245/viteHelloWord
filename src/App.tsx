import React from 'react';
import './App.css'

import Header from './components/Header/Header.tsx';  
import Main from './components/Main/Main.tsx';

  const App: React.FC = () => {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  };
  export default App;