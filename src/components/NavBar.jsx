import React, { useEffect, useState } from "react";

import Mobile from "./home/Mobile";
import Desk from "./home/Desk";

export default function NavBar() {
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
    <>
      <Mobile />
      {/* <Desk /> */}
    </>
  );
}
