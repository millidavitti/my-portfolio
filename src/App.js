import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className='container'>
      <NavBar />
      <div className='app-wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}
