import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo/logo.png";
import Cart from "./Cart/Cart";
import SearchBar from "./Search/Searchbar";
import ContactForm from "../Home/Components/Contact/ContactForm";
import {


    MDBCol,

} from "mdb-react-ui-kit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="flex justify-center  px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all relative">
            <div className="flex items-center justify-between w-full">


                <div className="flex">
                    <Link to="/" className="text-white no-underline">
                        <img src={logo} className="w-32 " alt="logo" />
                    </Link>
                </div>

                {/* CENTER: Navigation */}
                <div className="hidden sm:flex  gap-6 items-center justify-center  text-black text">
                    <Link className="text-black no-underline" to="/">Home</Link>
                    <Link className="text-black no-underline" to="/Shop">Shop</Link>
                    <Link onClick={handleClickOpen} className="text-black no-underline" to="">Contact</Link>
                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">

                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={(theme) => ({
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: theme.palette.grey[500],
                                })}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers>
                                <ContactForm />
                            </DialogContent>
                        </BootstrapDialog>
                    </MDBCol>
                </div>

                {/* RIGHT: Search + Cart */}
                <div className="flex items-center gap-4">
                    <SearchBar />

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

                <Link className="text-black no-underline" to="/">Home</Link>
                <Link className="text-black no-underline" to="/products">Shop</Link>
                <Link onClick={handleClickOpen} className="text-black no-underline" to="">Contact</Link>
                  <Link className="text-black no-underline" to="/products">Ratgeber</Link>
            </div>

        </div>
    )
}