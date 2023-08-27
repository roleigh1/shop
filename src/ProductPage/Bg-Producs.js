import { colors } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";


export default function BgImg() {
    return (
        <div class="container my-5">
            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white opacity-90"   style={{backgroundImage: `url('https://i.ibb.co/4tPTdQ1/pexels-ewa-raymond-14542188.jpg')` }} >
                <h1 style={{fontWeight:'700',fontSize:'20px',color:'black' , textDecoration:'underline'}} className="mb-3 h2">Our sortiment</h1>
                <p style={{fontWeight:'500',fontSize:'18px', color:'black' }}>
                    Our sortiment boasts a diverse range of Austrian-grown vegetables and fruits, celebrating the rich agricultural heritage and flavors of the region
                </p>
            </div>
            <style jsx>{`
         
            `}</style>
        </div>
    )
}