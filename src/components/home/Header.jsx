import React from "react";

// Assets
import download from "../../assets/icons/download.png";

export default function Header() {
  return (
    <header>
      <div className='hero-content'>
        <div className='hero-wrap'>
          <div className=''>
            <h2>
              I'm <span>Donald Abua.</span>
            </h2>
            <h3>FrontEnd Developer!</h3>
            <p>Welcome, a bit of tea and byte of bread?</p>
          </div>

          <div className='buttons'>
            <button>
              <a href='#port'>View Portfolio</a>
            </button>

            <button>
              <a
                href='https://my.indeed.com/p/donalda-2wf5elc'
                target='blank'
                rel='noopener noreferrer'
              >
                {" "}
              </a>
              <span>
                <img src={download} alt='download-icon'></img>
              </span>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
