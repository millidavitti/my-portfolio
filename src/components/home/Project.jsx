import React from "react";
// Assets
import imgg from "../../assets/images/avatar.jpg";

export default function Project() {
  return (
    <div className="project">
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        {" "}
      </a>
      <h3>Project Name</h3>
      <img src={imgg} alt=""></img>
      <div className="overlay"></div>
    </div>
  );
}
