import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo/logo.png";
import Cart from "./Cart/Cart";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-center  px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all relative">
            <div className="flex items-center justify-between w-full">

                {/* LEFT: Logo */}
                <div className="flex ">
                    <Link to="/" className="text-white no-underline">
                        <img src={logo} className="w-32 " alt="logo" />
                    </Link>
                </div>

                {/* CENTER: Navigation */}
                <div className="hidden sm:flex gap-6 items-center justify-center flex-1 text-black text">
                    <Link className="text-black no-underline" to="/">Home</Link>
                    <Link className="text-black no-underline" to="/products">Shop</Link>
                    <Link className="text-black no-underline" to="">Contact</Link>
                </div>

                {/* RIGHT: Search + Cart */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input
                            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                            type="text"
                            placeholder="Search products"
                        />
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="relative cursor-pointer">
                        <Cart />
                    </div>
                </div>

            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Cart />
                <Link href="#" className="block">Home</Link>
                <Link href="#" className="block">About</Link>
                <Link href="#" className="block">Contact</Link>


            </div>

        </div>
    )
}