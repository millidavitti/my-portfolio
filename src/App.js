import React from "react";
import { Routes, Route, L } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Aboutme from "./routes/AboutMe";
import ContactMe from "./routes/ContactMe";
import Portfolio from "./routes/Portfolio";
import Error from "./routes/Error";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className='container'>
      <NavBar />
      <div className='app-wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
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
