import React from "react";
import Socials from "./home/Socials";
// Assets
import linkedIn from "../assets/icons/linkedin-2.png";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <h2>Rockstar Dev</h2>
        <div className="quick-links">
          {/* Home */}
          <div className="quick-link">
            <h3>Home</h3>
            <ul>
              <li>
                <a href="https://google.com">About</a>
              </li>
              <li>
                <a href="https://google.com">Portfolio</a>
              </li>
            </ul>
          </div>
          {/* Contact me */}
          <div className="quick-link">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="https://google.com">E-mail</a>
              </li>
              <li>
                <a href="https://google.com">Linkedin</a>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div className="quick-link">
            <h3>Socials</h3>
            <div>
              <ul className="socials-wrap">
                {/* Twitter */}
                <Socials
                  listClass="twitter-wrap link"
                  link="https://twitter.com/gigo_22"
                  icon={twitter}
                  alt="twitter icon"
                  imageCLass="twitter"
                />
                {/* Github */}

                <Socials
                  listClass="github-wrap link"
                  link="https://github.com/millidavitti"
                  icon={github}
                  alt="github character"
                  imageCLass="github"
                />
                {/* LinkedIn */}

                <Socials
                  listClass="linkedin-wrap link"
                  link="https://linkedin.com/in/donaldabua-react/"
                  icon={linkedIn}
                  alt="linked icon"
                  imageCLass="linkedin"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
