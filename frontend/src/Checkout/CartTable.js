import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import Decimal from "decimal.js";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { apiConfig } from "../config";
import TextField from '@mui/material/TextField';

export default function CartTable({ voucher, token }) {
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const [message, setMessage] = useState("");
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();
  const [selectLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [voucherApplied, setVoucherApplied] = useState({
    state: false,
    newTotal: null
  });
  const { BASE_URL, endpoints } = apiConfig;
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
  const handleVoucherApply = async () => {
    try {

      if (!token) {
        setVoucherApplied({
          state: true,
          message: "You need a voucher link to apply a voucher to your cart.",
        });
        return; 
      }
      const response = await fetch(apiConfig.BASE_URL + apiConfig.endpoints.voucherApply, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          cart: cart,

        })
      }
      );
      const data = await response.json();
      if (!response.ok) {
        console.error("ERROR:", data.message);
        return;
      }
    
      let messageText = "";
      let stateValid = false;
      let state = true;
      switch (data.message) {
        case "Voucher applied successfully":
          state = false;
          stateValid = true;
          messageText = "Your voucher has been applied successfully";
          break;

        case "Voucher not valid yet":
          messageText = "This voucher is not valid yet.";
          break;

        case "Voucher expired":
          messageText = "This voucher has expired.";
          break;

        case "Voucher not found":
          messageText = "We couldn’t find this voucher.";
          break;

        case "Voucher redemption limit exceeded":
          messageText = "This voucher has already been used too many times.";
          break;

        case "No matching items for voucher":
          messageText = "This voucher doesn’t apply to the selected category.";
          break;
        case "Product not in cart":
          messageText = "This voucher applies to a product that is not in your cart.";
          break;
        default:
          messageText = "The voucher could not be applied.";
      }
      setVoucherApplied({
        state: state,
        newTotal: data.newTotal,
        message: messageText,
        discountAmount: data.discountAmount,
        stateValid: stateValid
      });

    } catch (error) {
      console.error("Error applying voucher:", error);
    }
  }
  const handleCheckout = async (event) => {
    event.preventDefault();
    try {
      console.log("state VoucheraApplied", voucherApplied.stateValid);
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
          ...(voucherApplied.stateValid && { voucherToken: token}) 
        }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
        if(token){
          localStorage.removeItem("voucherToken"); 
        }
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (message) {
    return <Message message={message} />;
  }
  if (cart.length === 0) {
    window.location.href = "/";
  }
  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }

  console.log(cart)

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-3 text-center text-2xl font-bold">Your Purchase</h1>
      <table className="mt-3 w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="">
            <th className="p-2 text-left"></th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="pl-8 text-left">Qty</th>
            <th className="p-2 text-left">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">
                <img
                  className="h-12 w-16 rounded object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.price}€</td>
              <td className="mt-[11px] flex items-center gap-2 p-2">
                <button
                  className="flex size-6 items-center justify-center rounded-full bg-red-500 font-bold text-white"
                  onClick={() => updateQuantity(item.name, -1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="flex size-6 items-center justify-center rounded-full bg-green-500 font-bold text-white"
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
                  className="size-[15px] fill-[#8e8e8e]"
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
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex gap-4 flex-col items-center">
            <TextField id="outlined-basic" aria-readonly label="Voucher %" value={voucher?.value ?? ""} variant="outlined" />
            <TextField
              label="Discount on"
              value={
                voucher?.voucherType === "total"
                  ? voucher?.voucherType ?? ""
                  : voucher?.discountedGroup ?? ""
              }
              variant="outlined"
            />
            <button
              onClick={handleVoucherApply}
              type="button"
              className="rounded bg-gray-700 px-6 py-2 font-bold text-white hover:bg-gray-600"
            >
              Apply Voucher
            </button>
          </div>

          {voucherApplied.state && (
            <p className="text-red-600">{voucherApplied.message}</p>
          )}



          {voucherApplied.stateValid ? (
            <div>
              <p className="text-green-600">
                {voucherApplied.message}
              </p>

              <p className="mt-4 text-lg font-semibold">
                New Total: {voucherApplied.newTotal} €
              </p>

              <p className="mt-4 text-lg font-semibold">
                Total before discount:{" "}
                {Number(voucherApplied.newTotal) + Number(voucherApplied.discountAmount)} €
              </p>
            </div>
          ) : (
            <p className="mt-4 text-lg font-semibold">
              Total: {totalValue} €
            </p>
          )}

          <button
            type="submit"
            className="rounded bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-600"
          >
            Checkout
          </button>
        </form>

      </div>
    </div>
  );
}

