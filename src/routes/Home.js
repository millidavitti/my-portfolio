import React from "react";

import Header from "../components/home/Header";
import About from "../components/home/About";
import Portfolio from "../components/home/Portfolio";

const home = (
  <>
    <Header />
    <About />
    <Portfolio />
  </>
);

export default function Home() {
  return home;
}
