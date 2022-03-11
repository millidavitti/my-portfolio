import React from "react";
import Me from "../components/about/Me";
import MyAbilities from "../components/about/MyAbilities";
import css from "../../src/css/aboutMe.module.css";

export default function AboutMe() {
  window.scroll(0, 0);
  return (
    <>
      <Me css={css} />
      <MyAbilities css={css} />
    </>
  );
}
