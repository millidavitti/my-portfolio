import React from "react";

// Asset Imports
import menu from "../assets/icons/ham-icon.png";
import download from "../assets/icons/download.png";

export default function Header() {
  return (
    <header>
      <nav>
        <h2>Rockstar Dev</h2>
        <img src={menu} alt="ham-menu" className="ham-menu" />
      </nav>
      <div className="hero-content">
        <div>
          <h2>
            I'm <span>Donald Abua.</span>
          </h2>
          <h3>FrontEnd Developer!</h3>
          <p>This is my portfolio website</p>
          <div className="buttons">
            <button>View Portfolio</button>
            <button>
              <span>
                <img src={download} alt="download-icon"></img>
              </span>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
