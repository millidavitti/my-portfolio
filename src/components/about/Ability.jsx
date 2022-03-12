import React from "react";

function Ability(props) {
  const { css, icon, head, text, back } = props;
  return (
    <div className={css.ability}>
      <div className={css.front}>
        <img src={icon} alt='phone icon' />
        <h3>{head}</h3>
        {text}
      </div>

      {/* Back */}
      <div className={css.back}>{back}</div>
    </div>
  );
}

export default Ability;
