import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// Asset Imports
import avatar from "./assets/images/avatar.jpg";

export default function App() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    ///
    window.addEventListener("resize", (e) => {
      const { width } = e.target.screen;
      setWidth(width);
    });
    ///
    console.log("Width Changed");
  }, [width]);

  //   console.log(window.getBoundingClientRect());
  return (
    <main className="container">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </main>
  );
}
