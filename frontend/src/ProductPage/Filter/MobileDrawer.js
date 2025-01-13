import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import SidebarMobile from "./SidebarMobile";

export default function MobileDrawer({ show,handleTogglerDrawer }) {
  const [drawerHeight, setDrawerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setDrawerHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
  }, []);

  const drawerWidth = 220;
  const props = useSpring({
    right: show ? 0 : 320,
    top: 0,
    backgroundColor: "white",
    height: `${drawerHeight}px`,
    width: `${drawerWidth}px`,
    config: { tension: 220, friction: 20 },
  });
  return (
    <animated.div style={props} className="absolute top-0   z-10">
      <div className="p-4">
        <button onClick={handleTogglerDrawer} className="mr-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
        </button>
       
        <SidebarMobile />
      </div>
    </animated.div>
  );
}
