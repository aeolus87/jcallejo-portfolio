import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <DesktopNavbar theme={theme} toggleTheme={toggleTheme} />

      <MobileNavbar toggleMenu={toggleMenu} showMenu={showMenu} theme={theme} toggleTheme={toggleTheme} />

      <MobileMenu showMenu={showMenu} />
    </div>
  );
};

const DesktopNavbar = ({ theme, toggleTheme }) => (
  <nav className="hidden sm:flex justify-between items-center z-50 w-full fixed top-0 left-0 h-16 px-12 shadow-lg shadow-cyan-500/50">
    <div className="flex items-center">
      <h2 className="m-0 font-bold text-2xl">jcallejo.<span className="text-cyan-500">dev</span></h2>
    </div>
    <div className="flex items-center space-x-4 flex-grow justify-center">
      <NavItem href="home.jsx">Home</NavItem>
      <NavItem href="about.jsx">About</NavItem>
      <NavItem href="projects.jsx">Projects</NavItem>
      <NavItem href="contactme.jsx">Contact Me</NavItem>
    </div>
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className="py-2 px-4 border rounded-full focus:outline-none transition-colors duration-300 flex items-center justify-center mr-4"
        style={{
          backgroundColor: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          width: '40px',
          height: '40px',
        }}
      >
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
    </div>
  </nav>
);

const MobileNavbar = ({ toggleMenu, showMenu, theme, toggleTheme }) => (
  <nav className="sm:hidden flex justify-between items-center z-50 w-full fixed top-0 left-0 h-16 px-4 shadow-lg shadow-cyan-500/50">
    <div className="flex items-center">
      <h2 className="m-0 font-bold text-2xl">jcallejo.<span className="text-cyan-500">dev</span></h2>
    </div>
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className="py-2 px-4 border rounded-full focus:outline-none transition-colors duration-300 flex items-center justify-center"
        style={{
          backgroundColor: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          width: '40px',
          height: '40px',
        }}
      >
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
      <button
        onClick={toggleMenu}
        className="text-3xl focus:outline-none"
      >
        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
      </button>
    </div>
  </nav>
);

const MobileMenu = ({ showMenu }) => (
  <div className="sm:hidden absolute top-16 right-0 shadow-md py-4" style={{ transition: 'right 0.5s', right: showMenu ? 0 : '-100%', width: '40%', textAlign: 'center' }}>
    <div className="flex flex-col items-center space-y-4">
      <NavItem href="home.jsx">Home</NavItem>
      <NavItem href="about.jsx">About</NavItem>
      <NavItem href="projects.jsx">Projects</NavItem>
      <NavItem href="contactme.jsx">Contact Me</NavItem>
    </div>
  </div>
);

const NavItem = ({ href, children }) => (
  <a href={href} className="font-semibold p-2 px-4 group">
    {children}
    <div className="bg-cyan-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
  </a>
);

export default Header;
