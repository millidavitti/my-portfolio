import React, { useState } from "react";
// Asset Imports
import menu from "../../assets/icons/ham-icon.png";
import close from "../../assets/icons/close.png";

export default function Mobile() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu(e) {
    if (!e.target) return;
    console.log(e.target);
    setToggle((pre) => !pre);
  }

  const mobMenu = {
    transform: toggle ? "translate(0)" : "translate(50%,0)",
    opacity: toggle ? 1 : 0,
    pointerEvents: toggle ? "initial " : "none",
  };
  return (
    <nav>
      <h2>Rockstar Dev</h2>
      <img
        src={toggle ? close : menu}
        alt='ham-menu'
        className='ham-menu'
        onClick={toggleMenu}
      />
      <ul className='mobile-items' style={mobMenu}>
        <li className='mobile-item'>
          <a href='https://google.com'>Home</a>
        </li>
        <li className='mobile-item'>
          <a href='https://google.com'>About me</a>
        </li>
        <li className='mobile-item'>
          <a href='https://google.com'>Portfolio</a>
        </li>
        <li className='mobile-item'>
          <a href='https://google.com'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
