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
          not just for it being best practice but it also makes my life easier.
          <br />
          <br />
          I create fluid grids and images and crops images when necessary to
          maximize impact. When it comes to icons I usually opt for
          SVG&gt;PNG&gt;JPG. I'm in process of exploring CSS icons to maximize
          load time. I use at least three break-points when designing.
          <br />
          <br />
          Usually check your visual hierarchy and use progressive disclosure and
          navigation drawers to give users needed items first, keep nonessential
          items (nice-to-haves) secondary. I aim for accessibility by using
          contrast and background effectively, make headlines at least 1.6 times
          bigger than body text. Make all text responsive so it appears in these
          proportions.
        </p>
      ),
    },
    {
      id: 2,
      icon: html,
      head: "HTML5 & CSS3",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
    },
    {
      id: 3,
      icon: team,
      head: "Collaboration",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
    },
    {
      id: 4,
      icon: speaker,
      head: "Speker",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
    },
    {
      id: 5,
      icon: icon1,
      head: "Web Master",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
    },
    {
      id: 6,
      icon: icon,
      head: "File Manager",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
    },
  ];
  const renderAbilities = myAbilities.map((ability) => (
    <Ability
      key={ability.id}
      css={css}
      icon={ability.icon}
      head={ability.head}
      text={ability.text}
    />
  ));

  return (
    <section className={css.abilities}>
      <h2>My Abilities</h2>
      <div className={css.wrap}>{renderAbilities}</div>
    </section>
  );
}
