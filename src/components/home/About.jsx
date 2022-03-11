import React from "react";
import { Link } from "react-router-dom";

// Asset Imports
import avatar from "../../assets/images/avatar.jpg";
import arrowRight from "../../assets/icons/arrow-right.png";

export default function About(props) {
  const { active, activeMenu } = props;

  return (
    <section className='about-me' id='about'>
      <div>
        <img className='avatar' src={avatar} alt='Donald Abua' />
        <article>
          <h2>About Me</h2>
          <p>
            I see you're a bit curious. Well, I am motivated, task-oriented, and
            efficient, and my knowledge of the front-end web development
            industry is comprehensive and current. My enthusiasm and commitment
            to excellence have served me well. I have extensive experience with
            vanilla JavaScript, having had the chance to significantly develop
            my front-end development skills while working on little side
            projects..
          </p>
          <button>
            More about me
            <Link
              to='about-me'
              onClick={activeMenu.bind(null, active[1].id)}
            ></Link>
            <span>
              <img src={arrowRight} alt=''></img>
            </span>
          </button>
        </article>
      </div>
    </section>
  );
}
