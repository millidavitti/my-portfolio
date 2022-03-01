import React, { useState } from "react";

import Project from "./Project";

// Assets
import arrowRight from "../../assets/icons/arrow-right.png";
import imgg from "../../assets/images/avatar.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Space Tourism",
      img: imgg,
      link: "https://space-vegan.netlify.app",
    },
    {
      title: "To-Do",
      img: imgg,
      link: "hhttps://todo-vegan.netlify.app",
    },
    {
      title: "Fund",
      img: imgg,
      link: "https://funds-vegan.netlify.app",
    },
    {
      title: "Lets Roll",
      img: imgg,
      link: "https://lets-roll-vegan.netlify.app",
    },
  ];

  const renderProjects = projects.map((pro) => (
    <Project title={pro.title} img={pro.img} link={pro.link} />
  ));

  return (
    <section className='portfolio'>
      <h2 id='port'>Portfolio</h2>
      <div>
        <div className='projects grid'>{renderProjects}</div>
        <button className='repo-btn'>
          <a href='https://github.com/millidavitti' target='blank'>
            {" "}
          </a>
          Visit my repository
          <span>
            <img src={arrowRight} alt=''></img>
          </span>
        </button>
      </div>
    </section>
  );
}
