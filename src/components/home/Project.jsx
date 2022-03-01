import React from "react";
// Assets

export default function Project(props) {
  const { title, img, link } = props;
  return (
    <div className='project'>
      <a href={link} target='_blank' rel='noreferrer'>
        {" "}
      </a>
      <h3>{title}</h3>
      <img src={img} alt=''></img>
      <div className='overlay'></div>
    </div>
  );
}
