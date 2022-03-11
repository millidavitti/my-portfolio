import React from "react";
import Projects from "../components/portfolio/Projects";
import css from "../css/portfolio.module.css";

export default function Portfolio() {
  window.scroll(0, 0);
  return (
    <>
      <Projects css={css} />
    </>
  );
}
