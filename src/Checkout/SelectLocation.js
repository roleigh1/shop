import React, { useState } from "react";

export default function SelectLocation() {
  
    const [selectLocation, setSelectedLocation] = useState("");
    
    const sendDatatoBackend = async () => {
        try {
            const response = await fetch("http://localhost:4242/selected-location", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ value: selectLocation}),
            });
            
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error sending data of location:", error);
        }
    }

    const handleSelectChange = (event) => {
        setSelectedLocation(event.target.value);
        sendDatatoBackend();
    }

    return (
        <div>
        
            <select onChange={handleSelectChange} name="locations" id="locations">
               <option >Select a Pickup Location</option>
                <option value="Karmelitermarkt">Karmelitermarkt</option>
                <option value="Vorgartenmarkt">Vorgartenmarkt</option>
                <option value="Südiroler Platz">Südtiroler Platz</option>
            </select>
        </div>
    )
}
