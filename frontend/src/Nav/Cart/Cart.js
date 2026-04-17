import { useState, useEffect } from "react";
import { useCart } from "../../CartContext";
import imcart from "./imcart.png";
import CartPopUp from "./CartPopUp"

export default function Cart() {


  const { cart } = useCart();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (cart.length <= 0) {
      setOpen(false);
    }
  }, [cart])

  return (
    <div className="relative flex justify-end">
      {cart.length > 0 && (
        <span className="absolute left-4 top-[-0.6rem] z-10 font-bold text-red-500">
          {cart.length}
        </span>
      )}
      <img
        onClick={() => {
          if (cart.length > 0) {
            setOpen(true);
          }
        }}
        aria-hidden="true"
        src={imcart}
        className=" z-0 mb-1 mr-4 w-8 cursor-pointer"
        alt="cart"
      />
      {open && (
        <CartPopUp setOpen={setOpen} open={open} />
      )}
    </div>
  );
}
