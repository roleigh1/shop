import React from "react";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLocation({selectLocation,setSelectedLocation}) {
  
  
    


    const handleSelectChange = (event) => {
        setSelectedLocation(event.target.value);
       
    }

    return (
        <div>
     <FormControl style={{width:"10rem"}}>
  <InputLabel id="demo-simple-select-label">Locaction</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectLocation}
    label="Pick a Locaction"
    onChange={handleSelectChange}
  >
    
    <MenuItem value={"Karmelitermarkt"}>Karmelitermarkt</MenuItem>
    <MenuItem value={"Vorgartenmarkt"}>Vorgartenmarkt</MenuItem>
    <MenuItem value={"Südtiroler Platz"}>Südtiroler Platz</MenuItem>
  </Select>
</FormControl>
        </div>
    )
}
