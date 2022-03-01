import React from "react";
import Me from "../components/about/Me";
import MyAbilities from "../components/about/MyAbilities";
import css from "../../src/css/aboutMe.module.css";

function AboutMe() {
  return (
    <>
      <Me css={css} />
      <MyAbilities css={css} />
    </>
  );
}

export default AboutMe;
