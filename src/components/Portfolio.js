import React from "react";
import Project from "./Project";
import arrowRight from "../assets/icons/arrow-right.png";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div>
        <h2>Portfolio</h2>
        <Project />
        <Project />
        <Project />
        <Project />
        <button>
          My Repository
          <span>
            <img src={arrowRight} alt=""></img>
          </span>
        </button>
      </div>
    </section>
  );
}
