import React, { useEffect, useState } from "react";

import Mobile from "./home/Mobile";

export default function NavBar(props) {
  const { desk } = props;
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    ///
    window.addEventListener("resize", (e) => {
      const { width } = e.target.screen;
      setWidth(width);
    });
    ///
  }, [width]);

  return <>{width < 796 ? <Mobile /> : desk}</>;
}
