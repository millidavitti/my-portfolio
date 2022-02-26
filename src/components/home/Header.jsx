import React from "react";
import NavBar from "../NavBar";
// Assets
import download from "../../assets/icons/download.png";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="hero-content">
        <div>
          <h2>
            I'm <span>Donald Abua.</span>
          </h2>
          <h3>FrontEnd Developer!</h3>
          <p>Welcome, a bit of tea and byte of bread?</p>
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
