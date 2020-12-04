import React from 'react';
import useDarkMode from "../hooks/useDarkMode"

//const Navbar = (props) => {
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    //props.setDarkMode(!props.darkMode);
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          //className={props.darkMode ? 'toggle toggled' : 'toggle'}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
