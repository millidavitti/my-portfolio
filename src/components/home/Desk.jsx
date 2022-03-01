import React, { useState } from "react";
import DeskItem from "./DeskItem";

function Desk() {
  const [active, setActive] = useState([
    { id: "home", isActive: true, text: "Home", href: "#" },
    { id: "about", isActive: false, text: "About me", href: "#" },
    { id: "portfolio", isActive: false, text: "Portfolio", href: "#" },
    { id: "contact", isActive: false, text: "Contact", href: "#" },
  ]);

  function activeMenu(id) {
    setActive((pre) => {
      return pre.map((obj) => {
        return obj.id === id
          ? { ...obj, isActive: true }
          : {
              ...obj,
              isActive: false,
            };
      });
    });
  }

  return (
    <nav>
      <div className='desk-wrap'>
        <h2>Rockstar Dev</h2>
        <ul className='desk-items'>
          {active.map((act) => (
            <DeskItem
              key={act.id}
              id={act.id}
              activeMenu={activeMenu}
              text={act.text}
              isActive={act.isActive}
              link={act.href}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Desk;
