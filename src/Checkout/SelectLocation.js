import React from "react";

export default function SelectLocation({selectLocation,setSelectedLocation}) {
  
  
    


    const handleSelectChange = (event) => {
        setSelectedLocation(event.target.value);
       
    }

    return (
        <div>
        
            <select onChange={handleSelectChange} name="locations" id="locations">
               <option value="false">Select a Pickup Location</option>
                <option value="Karmelitermarkt">Karmelitermarkt</option>
                <option value="Vorgartenmarkt">Vorgartenmarkt</option>
                <option value="Südiroler Platz">Südtiroler Platz</option>
            </select>
        </div>
    )
}
