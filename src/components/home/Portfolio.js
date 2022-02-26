import React from "react";
import Project from "./Project";

// Assets
import arrowRight from "../../assets/icons/arrow-right.png";

export default function Portfolio() {
  return (
    <section className="portfolio ">
      <h2>Portfolio</h2>
      <div>
        <div className=" grid">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
        <button className="repo-btn">
          <a href="https://github.com/millidavitti" target="blank">
            {" "}
          </a>
          Visit my repository
          <span>
            <img src={arrowRight} alt=""></img>
          </span>
        </button>
      </div>
    </section>
  );
}
