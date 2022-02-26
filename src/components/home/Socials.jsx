import React from "react";

export default function Socials(props) {
  return (
    <li className={props.listClass}>
      <a href={props.link} target="blank" rel="noreferrer">
        {" "}
      </a>
      <img
        src={props.icon}
        alt={props.alt}
        className={props.imageClass}
        style={{
          width: "30px",
        }}
      ></img>
    </li>
  );
}
