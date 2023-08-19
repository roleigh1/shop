import React , {useState} from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
function BurgerMenu() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
            setHamburgerOpen(!hamburgerOpen)
    }
   

    return (
        <div>
        
            <div className="navigation">
                <ul>
                    <li><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link> </li>
                    <li>About</li>
                    <li>Contact us</li>
                
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
        
       <style jsx>{`
     
  
    .navigation {
      
    }
    .navigation ul li{
        list-style-type: none;
        
    }
    li {
        text-align: center;
        position: relative;
        top:25%;
        
    }
    li:hover {
        text-decoration:underline;
    }
    .navigation ul{
        display: ${hamburgerOpen ? "inline" : "none"};
        background-color: 	#686868;
        height: 10rem;
        width: 15rem;
        margin-top: 30px;
        position: absolute;
        margin-left:-15rem;
        border-right: 25px solid transparent;
        border-top: 25px solid white;   
        color:white;
        z-index:1; 
    }

    
    `}</style>
       </div>
    )
}
export default BurgerMenu;