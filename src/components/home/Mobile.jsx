import React, { useState } from "react";
import { Link } from "react-router-dom";
// Asset Imports
import menu from "../../assets/icons/ham-icon.png";
import close from "../../assets/icons/close.png";

export default function Mobile() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle((pre) => !pre);
  }

  function hide() {
    setToggle((pre) => !pre);
  }

  const mobMenu = {
    transform: toggle ? "translate(0)" : "translate(50%,0)",
    opacity: toggle ? 1 : 0,
    pointerEvents: toggle ? "initial " : "none",
  };
  return (
    <nav>
      <h2>
        <Link to='/'>Rockstar Dev</Link>
      </h2>
      <img
        src={toggle ? close : menu}
        alt='ham-menu'
        className='ham-menu'
        onClick={toggleMenu}
      />
      <ul className='mobile-items' style={mobMenu} onClick={hide}>
        <li className='mobile-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mobile-item'>
          <Link to='about-me'>About me</Link>
        </li>
        <li className='mobile-item'>
          <Link to='portfolio'>Portfolio</Link>
        </li>
        <li className='mobile-item'>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
