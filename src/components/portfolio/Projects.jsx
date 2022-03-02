import React from "react";
import ProjectInfo from "./ProjectInfo";

import funds from "../../assets/images/funds.png";
import roll from "../../assets/images/roll.png";
import space from "../../assets/images/space.png";
import todo from "../../assets/images/todo.png";

export default function Projects(props) {
  const { css } = props;
  const projectInfos = [
    {
      id: 1,
      title: "Space\nTourism",
      img: space,
      text: (
        <p>
          Used optional chaining (ES6 syntax) to add event listeners to DOM
          elements that weren't displayed on the current page.
          <br />
          <br />
          Displayed information dynamically using a local JSON data file
          contained to cut down on the amount of html written.
          <br />
          <br /> Made use of object destructuring while fetching data from the
          JSON data file to minimise the creation of redundant variables.
          <br />
          <br /> Figma design files were being used as a guide to laying out the
          website.
          <br />
          <br /> The desktop navigation was implemented in JavaScript to save
          myself the burden of copying/pasting the html on every page created.
          <br />
          <br />
          That way, the menu appears on new pages automatically. The desktop
          navigation was implemented using ES6 classes and private fields
        </p>
      ),
    },
    {
      id: 2,
      title: "Funds",
      img: funds,
      text: (
        <p>
          A simple bank dashboard with transaction history Implementation of the
          transfer, request loan, close account feature were implemented with
          data transformation array methods like map, filter and reduce.
          <br />
          <br />
          Utilised the Internationalisation API to format date, time and
          greetings based on the geolocation of the client's browser.
          <br />
          <br />
          This improved accessibility of the web application. Implemented an
          automated log out feature that logged the user out after a set time
          with the setTimeout function (pun intended)
        </p>
      ),
    },
    {
      id: 3,
      title: "To-do",
      img: todo,
      text: <p>This simple but useful project was implemented using React.</p>,
    },
    {
      id: 4,
      title: "Lets Roll",
      img: roll,
      text: (
        <p>
          Vanilla Javascript was used to implement the games functionality.
          <br /> <br /> Made use of Object-oriented programming paradigm to
          build an develop this game.
        </p>
      ),
    },
  ];

  const renderProInfo = projectInfos.map((info) => (
    <ProjectInfo
      key={info.id}
      css={css}
      title={info.title}
      img={info.img}
      text={info.text}
    />
  ));
  return <div className={css.portfolio}>{renderProInfo}</div>;
}
