import React, { useEffect, useState } from "react";

export default function App() {
  const [width, setWidth] = useState(0);
  //   let wii;
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
      <header>
        <nav>
          <h2>Rockstar Dev!!</h2>
          <div className="ham-icon"></div>
        </nav>
      </header>
    </main>
  );
}
