import React from "react";

// Assets
import imgg from "../assets/images/avatar.jpg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div>
        <h2>Portfolio</h2>
        <div className="project">
          <img src={imgg} alt=""></img>
          <h3>Project Name</h3>
          <div className="overlay"></div>
        </div>
        <button>My Repository</button>
      </div>
    </section>
  );
}
