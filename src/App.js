import React, { useEffect, useLayoutEffect, useState } from "react";

export default function App() {
  //   const window = document.documentElement;
  //   console.log(window);

  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      const { width } = e.target.screen;
      console.log(width);
    });
  });
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
