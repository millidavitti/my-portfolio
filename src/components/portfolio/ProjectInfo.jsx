import React from "react";

export default function ProjectInfo(props) {
  const { css, title, img, text } = props;
  return (
    <div className={css.project}>
      <h2>{title}</h2>
      <img src={img} alt='roll' />
      {text}
    </div>
  );
}
