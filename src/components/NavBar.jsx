import React, { useEffect, useState } from "react";

import Mobile from "./home/Mobile";
import Desk from "./home/Desk";

export default function NavBar() {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    ///
    window.addEventListener("resize", (e) => {
      const { width } = e.target.screen;
      setWidth(width);
    });
    ///
  }, [width]);

  return <>{width < 796 ? <Mobile /> : <Desk />}</>;
}
