import React from "react";

function Ability(props) {
  const { css, icon, head, text } = props;
  return (
    <div className={css.ability}>
      <img src={icon} alt='phone icon' />
      <h3>{head}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Ability;
