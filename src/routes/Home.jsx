import React from "react";

import Header from "../components/home/Header";
// import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";

export default function Home(props) {
  const { about } = props;
  return (
    <>
      <Header />
      {about}
      <Portfolio />
    </>
  );
}
