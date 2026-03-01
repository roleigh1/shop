import  { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "../Contact/ContactForm";

import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MDBFooter
      style={{ fontSize: "12px" }}
      bgColor="light"
      className="text-lg-start text-muted text-center"
    >
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom p-4">
        <div className="d-none d-lg-block me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="https://www.twitter.com" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="https://www.google.com" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="https://www.instagram.com" className="text-reset me-4">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-md-start mt-5 text-center">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="e fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Gärtnerei Leitner: Fresh vegetables for Vienna&apos;s markets.  
              </h6>
              <p>
                Right in the heart of Simmering, a lively district in Vienna, a
                special nursery is flourishing. Here, protected from the hustle
                and bustle of the city, crisp salads, aromatic herbs and
                colorful vegetables grow to delight every palate.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4">Useful links</h6>
              <span onClick={handleClickOpen} aria-hidden="true">Contact Us</span>
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

            <MDBCol md="4" lg="3" xl="3" className="mb-md-0 mx-auto mb-4">
              <h6 className=" fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Vienna, Vie 1110, AT
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@GärtnereiLeitner.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Developed @RoLeigh
      </div>
    </MDBFooter>
  );
};

export default Footer;
