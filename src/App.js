import React, { useState, useEffect } from 'react';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <Home theme={theme} />
      </div>
    </div>
  );
}

export default App;
