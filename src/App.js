import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Aboutme from "./routes/AboutMe";
import ContactMe from "./routes/ContactMe";
import Portfolio from "./routes/Portfolio";
import Error from "./routes/Error";
import Footer from "./components/Footer";
///
import About from "./components/home/About";
import Desk from "./components/home/Desk";

export default function App() {
  const navStates = [
    { id: "home", isActive: true, text: "Home", href: "/" },
    { id: "about", isActive: false, text: "About me", href: "about-me" },
    { id: "portfolio", isActive: false, text: "Portfolio", href: "portfolio" },
    { id: "contact", isActive: false, text: "Contact", href: "contact" },
  ];
  const retrieve = JSON.parse(localStorage?.getItem("navigation"));
  const [active, setActive] = useState(retrieve || navStates);

  useEffect(() => {
    localStorage.setItem("navigation", JSON.stringify(active));
  }, [active]);

  function activeMenu(id) {
    setActive((pre) => {
      return pre.map((obj) => {
        return obj.id === id
          ? { ...obj, isActive: true }
          : {
              ...obj,
              isActive: false,
            };
      });
    });
  }

  // Context
  const about = <About active={active} activeMenu={activeMenu} />;

  const desk = <Desk active={active} activeMenu={activeMenu} />;

  return (
    <main className='container'>
      <NavBar desk={desk} />
      <div className='app-wrap'>
        <Routes>
          <Route path='/' element={<Home about={about} />} />
          <Route path='about-me' element={<Aboutme />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<ContactMe />} />

          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}
