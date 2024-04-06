
import React from "react";


export default function BgImg() {
    return (
        <div class="container my-5">
            <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white opacity-" style={{backgroundImage: `url('http://localhost:3131/uploads/productsBG.jpg')`, objectFit:"cover" }} >
                <h1 style={{fontWeight:'700',fontSize:'25px',color:'black' , textDecoration:'underline',background:'' ,opacity:'1'}} className="mb-3 h2">Our sortiment</h1>
                <p style={{fontWeight:'500',fontSize:'18px', color:'black' ,opacity:'1'}}>
                    Our sortiment boasts a diverse range of Austrian-grown vegetables and fruits, celebrating the rich agricultural heritage and flavors of the region
                </p>
            </div>
            <style jsx>{`
         
            `}</style>
        </div>
    )
}