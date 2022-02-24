import React from "react";

// Assets
import linkedIn from "../assets/icons/linkedIn.png";

export default function Footer() {
  return (
    <footer>
      <h2>Rockstar Dev</h2>
      <div className="quick-links">
        {/* Home */}
        <div className="quick-link">
          <h3>Home</h3>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </div>
        {/* Contact me */}
        <div className="quick-link">
          <h3>Contact</h3>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </div>
        {/* Socials */}
        <div className="quick-link">
          <h3>Socials</h3>
          <ul>
            <li>Twitter-icon</li>
            <li>
              <img src={linkedIn} alt="linkedin icon"></img>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
