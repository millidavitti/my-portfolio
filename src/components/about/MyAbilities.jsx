import React from "react";
import Ability from "./Ability";

// Assets
import phone from "../../assets/icons/device-mobile.png";
import html from "../../assets/icons/code.png";
import team from "../../assets/icons/Icon-2.png";
import icon1 from "../../assets/icons/Icon-1.png";
import speaker from "../../assets/icons/speakerphone.png";
import icon from "../../assets/icons/Icon.png";

export default function MyAbilities(props) {
  const { css } = props;
  const myAbilities = [
    {
      id: 1,
      icon: phone,
      head: "Responsive Design",
      text: (
        <p>
          I use the 3 core technical principles of responsive design; fluid
          grids, fluid images and media queries. I prefer using pure CSS and
          SCSS on demand. Taking the mobile first design approach is my thing,
          not just it being best practice but it making my life easier. When it
          comes to icons I usually opt for SVG&gt;PNG&gt;JPG. Also in process of
          exploring CSS icons to maximize load time.
        </p>
      ),
      back: (
        <p>
          I use at least three break-points when designing. Usually check your
          visual hierarchy and use progressive disclosure and navigation drawers
          to give users needed items first, keeping nonessential items
          (nice-to-haves) secondary.
        </p>
      ),
    },
    {
      id: 2,
      icon: html,
      head: "HTML5 & CSS3",
      text: (
        <p>
          I ensure the use of HTML5’s semantic elements It helps structure the
          code I write, making it readable, easier to maintain and makes it
          easier for for search engines to index your website/app. Futhermore,
          HTML5 semantics makes the web accessible to those who live with
          disabilities. Lastly, I use CSS3 to make eye catching presentation of
          the website/app and improve overall user experince.
        </p>
      ),
    },
    {
      id: 3,
      icon: team,
      head: "Collaboration",
      text: (
        <p>
          Effective collaboration requires a lot from we developers. Therefore,
          I'll iterate over some of my valuable soft skills. I will say, I: am
          open-minded, articulate words and get my message across, am super
          organised (I mean, why won't I? React folder get convoluted real
          quick), incoporate long-term thinking in my work flow, adapt quickly
          (things don't always go as planned) e.t.c
        </p>
      ),
    },
    {
      id: 4,
      icon: icon1,
      head: "React JS",
      text: (
        <p>
          React (sometimes called React.js or React JS) is a JavaScript library
          for building fast and interactive user interfaces (UI). I possess this
          super power 'cause it allows me develop complex and scaleable UI's
          with relative ease. This super power is also utilised in mobile app
          development. You see why?
        </p>
      ),
    },
    {
      id: 5,
      icon: icon,
      head: "Version Control (Git/Github)",
      text: (
        <p>
          Git is a version control system system used for tracking changes made
          in computer files. Github on the other hand, is a cloud based git
          repository. Allows for coordination/collaboration among teams members
          working on a project and in isolation. It's basically were world store
          code, making it accessible to anyone with an internet connection.
        </p>
      ),
    },
    {
      id: 6,
      icon: speaker,
      head: "Vanilla JavaScript",
      text: (
        <p>
          Vanilla script is used to refer to the pure or plain JavaScript
          without any type of additional library e.g React JS. It an important
          front-end stack. It provides and effortless but user friendly
          dveloping experience and makes working with libraries and frameworks
          easier. With the help of JavaScript we create rich interfaces
          improving the overall user experince.
        </p>
      ),
    },
  ];
  const renderAbilities = myAbilities.map((ability) => (
    <Ability
      key={ability.id}
      css={css}
      icon={ability.icon}
      head={ability.head}
      text={ability.text}
      back={ability.back}
    />
  ));

  return (
    <section className={css.abilities}>
      <h2>My Abilities</h2>
      <div className={css.wrap}>{renderAbilities}</div>
    </section>
  );
}
