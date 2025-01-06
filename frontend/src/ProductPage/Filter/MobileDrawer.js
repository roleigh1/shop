import React, {useEffect, useState} from 'react'
import { useSpring, animated } from "react-spring"

export default function MobileDrawer({show}) {
  const [drawerHeight,setDrawerHeight] = useState(window.innerHeight); 



    useEffect(() => {
      const updateHeight = () => setDrawerHeight(window.innerHeight); 
      window.addEventListener("resize", updateHeight); 

      return () => window.removeEventListener("resize" ,updateHeight)
    },[])
    const drawerWith = 320
    const props = useSpring({
      right: show ? 0 : -320,
      top: 0, 
      backgroundColor: "#806290",
      height: `${drawerWith}px`,
      widht:`${drawerWith}px`,
      config: {tension: 220,friction:20}
  })
  return (
    <animated.div 
    style={props}
    className="absolute top-0 bg-purple-600 h-screen w-[300px] z-10"
    >
        <div className='p-4 text-white'>Animated Drawer</div>
    </animated.div>
  ); 
}; 
