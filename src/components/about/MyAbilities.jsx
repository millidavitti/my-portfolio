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
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident optio
        obcaecati atque? Hic modi quisquam sint velit repudiandae officia
        voluptates quod blanditiis tenetur amet quae nesciunt quo, doloremque
        officiis voluptatem.`,
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
