import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import axios from "axios";
export default function PickupDate(){
 const [startDate, setStartDate] = useState(new Date());
 
  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }

    
    function handleDateChange(date) {
        setStartDate(date);
    
        axios.post("http://localhost:4242/selected-date", { date })
          .then(response => {
            console.log("Server Response:", response.data);
          })
          .catch(error => {
            console.error("Error senfing date to server:", error);
          });
      };
    return (
        <div>
            <p>Pickup date:</p>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              filterDate={(date) => !isWeekend(date)}
            />
        </div>
    )
}