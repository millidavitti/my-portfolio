import React from "react";

// Asset Imports
import menu from "../assets/icons/ham-icon.png";

export default function NavBar() {
  return (
    <nav>
      <h2>Rockstar Dev</h2>
      <img src={menu} alt='ham-menu' className='ham-menu' />
    </nav>
  );
}
