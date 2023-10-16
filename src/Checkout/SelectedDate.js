import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function PickupDate({selectedDate,setSelectedDate}){
  
 
  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  
    return (
        <div>
            <p>Pickup date:</p>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              filterDate={(date) => !isWeekend(date)}
            />
        </div>
    )
}