import React from "react";

function DeskItem(props) {
  const { activeMenu, id, text, isActive, link } = props;

  const underline = {
    borderBottom: isActive ? "2px solid var(--btn-bg)" : "none",
  };

  return (
    <li className='desk-item' onClick={activeMenu.bind(null, id)}>
      <a href={link} style={underline}>
        {text}
      </a>
    </li>
  );
}

export default DeskItem;
