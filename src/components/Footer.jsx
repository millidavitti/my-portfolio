import React from "react";
import Socials from "./home/Socials";
import { Link } from "react-router-dom";

// Assets
import linkedIn from "../assets/icons/linkedin-2.png";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";

export default function Footer() {
  return (
    <footer>
      <div className='footer-wrap'>
        <div className='quick-links'>
          <h2>Rockstar Dev</h2>
          {/* Home */}
          <div className='quick-link'>
            <h3>Home</h3>
            <ul>
              <li>
                <Link to='about-me'>About me</Link>
              </li>
              <li>
                <Link to='portfolio'>Portfolio</Link>
              </li>
            </ul>
          </div>
          {/* Contact me */}
          <div className='quick-link'>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href='https://google.com'>E-mail</a>
              </li>
              <li>
                <a href='https://linkedin.com/in/donaldabua-react/'>Linkedin</a>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div className='quick-link'>
            <h3>Socials</h3>
            <div>
              <ul className='socials-wrap'>
                {/* Twitter */}
                <Socials
                  listClass='twitter-wrap link'
                  link='https://twitter.com/gigo_22'
                  icon={twitter}
                  alt='twitter icon'
                  imageCLass='twitter'
                />
                {/* Github */}

                <Socials
                  listClass='github-wrap link'
                  link='https://github.com/millidavitti'
                  icon={github}
                  alt='github character'
                  imageCLass='github'
                />
                {/* LinkedIn */}

                <Socials
                  listClass='linkedin-wrap link'
                  link='https://linkedin.com/in/donaldabua-react/'
                  icon={linkedIn}
                  alt='linked icon'
                  imageCLass='linkedin'
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
