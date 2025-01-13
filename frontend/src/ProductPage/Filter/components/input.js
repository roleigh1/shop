import React from "react";

export default function Input({handleChange,value,name,color,title}){


    return (
        <div>
            <label className="sidebar-label-container text-sm sm:text-[14px]"> 
                <input 
            
                    onChange={handleChange} 
                    type="radio" 
                    value={value} 
                    name={name} 
                />
                <span 
                    className="checkmark" 
                    style={{ backgroundColor: color }}
                ></span>
                {title}
            </label>
        </div>
    );
};
