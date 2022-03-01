import React from "react";

function Ability(props) {
  const { css, icon, head, text } = props;
  return (
    <div className={css.ability}>
      <div className={css.front}>
        <img src={icon} alt='phone icon' />
        <h3>{head}</h3>
        <p>{text}</p>
      </div>

      {/* Back */}
      <div className={css.back}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, sint
          pariatur? Aliquid nesciunt assumenda voluptatem officiis dignissimos
          cumque rem. Incidunt.
        </p>
      </div>
    </div>
  );
}

export default Ability;
