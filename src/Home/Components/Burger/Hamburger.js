import React from "react";

function Hamburger({isOpen}){
    return(
        <div className="hamburger"> 
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
            <style >{`
                .burger1{
                    transform: ${ isOpen ? "rotate(45deg)": "rotate(0)"};
                }
                .burger2{
                    transform: ${ isOpen ? "rotate(45deg)" : "rotate(0)"};
                    opacity: ${ isOpen ? 0 : 1};
                }
                .burger3 {
                    transform: ${ isOpen ? "rotate(-45deg)" : "rotate(0)"}
                }
                .hamburger {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    display: fixed;
                   
                    
                    
                }
                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius:10px;
                    background-color: ${ isOpen ? "#686868" : "black"};
                    transform-origin: 1px;
                    transition:all 0.3s linear;
                }
                
               
            `}</style>
        </div>
      
    )
}
export default Hamburger;