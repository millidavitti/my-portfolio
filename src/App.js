import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Footer from "./components/Footer";

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
    <main className='container'>
      <div className='app-wrap'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}
