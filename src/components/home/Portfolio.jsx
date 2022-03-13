import React from "react";

import Project from "./Project";

// Assets
import arrowRight from "../../assets/icons/arrow-right.png";

import funds from "../../assets/images/funds.png";
import roll from "../../assets/images/roll.png";
import space from "../../assets/images/space.png";
import todo from "../../assets/images/todo.png";
import fork from "../../assets/images/fork.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Forkify",
      img: fork,
      alt: "forkify",
      link: "https://forkify-vegan.netlify.app/",
    },
    {
      id: 2,
      title: "To-Do",
      img: todo,
      alt: "to do",
      link: "https://todo-vegan.netlify.app",
    },
    {
      id: 3,
      title: "Fund",
      img: funds,
      alt: "funds",
      link: "https://funds-vegan.netlify.app",
    },
    {
      id: 4,
      title: "Lets Roll",
      img: roll,
      alt: "space tourism",
      link: "https://lets-roll-vegan.netlify.app",
    },
    {
      id: 5,
      title: "Space Tourism",
      img: space,
      alt: "space tourism",
      link: "https://space-vegan.netlify.app",
    },
  ];

  const renderProjects = projects.map((pro) => (
    <Project key={pro.id} title={pro.title} img={pro.img} link={pro.link} />
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
