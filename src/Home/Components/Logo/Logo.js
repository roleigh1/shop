import React from "react";
import logo from "./logo.png"
function Logo() {
    return (
        <div>
            <img  src={logo} className="App-logo" alt="logo"/>
           <style jsx>{`
           .App-logo {
            width:8rem;
            margin-top:1rem;
            
           }
        `}
        </style>
        </div>
    )
}
export default Logo