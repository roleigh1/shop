import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import Decimal from "decimal.js";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { apiConfig } from "../config";


export default function CartTable() {
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const [message, setMessage] = useState("");
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();
  const [selectLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
    const {BASE_URL,endpoints} = apiConfig; 
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const successMessage =
      "Order placed! You will receive an email confirmation.";
    const canceledMessage =
      "Order canceled -- continue to shop around and checkout when you're ready.";

    const status = query.get("success")
      ? "success"
      : query.get("canceled")
      ? "canceled"
      : null;

    if (status) {
      setMessage(status === "success" ? successMessage : canceledMessage);
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${BASE_URL}${endpoints.checkout}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart,
          selectLocation: selectLocation,
          selectedDate: selectedDate,
        }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (message) {
    return <Message message={message} />;
  }

  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mt-3 text-2xl font-bold">Your Purchase</h1>
      <table className="w-full mt-3 border-separate border-spacing-y-3">
        <thead>
          <tr className="">
            <th className="text-left p-2"></th>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left pl-8">Qty</th>
            <th className="text-left p-2">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">
                <img
                  className="w-16 h-12 rounded object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.price}€</td>
              <td className="p-2 mt-[11px] flex items-center gap-2">
                <button
                  className="bg-red-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center"
                  onClick={() => updateQuantity(item.name, -1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="bg-green-500 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center"
                  onClick={() => updateQuantity(item.name, 1)}
                >
                  +
                </button>
              </td>
              <td className="p-2">
                {new Decimal(item.price).times(item.quantity).toFixed(2)}€
              </td>
              <td className="p-2">
             
                <svg
                  onClick={() => removeFromCart(item.name)}
                  className="w-[15px] h-[15px] fill-[#8e8e8e]"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 flex flex-col items-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-full md:w-2/4">
            <FormControl fullWidth>
              <InputLabel id="location-select-label">Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                value={selectLocation}
                label="Pick a Location"
                onChange={handleSelectChange}
                required

              >
                <MenuItem value={"Karmelitermarkt"}>Karmelitermarkt</MenuItem>
                <MenuItem value={"Vorgartenmarkt"}>Vorgartenmarkt</MenuItem>
                <MenuItem value={"Südtiroler Platz"}>Südtiroler Platz</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <DatePicker
              required
              selected={selectedDate}
              onChange={handleDateChange}
              filterDate={(date) => !isWeekend(date)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600"
          >
            Checkout
          </button>
        </form>

        <p className="mt-4 text-lg font-semibold">Total: {totalValue}€</p>
      </div>
    </div>
  );
}

CartTable.propTypes = {
  message: PropTypes.string,
};
