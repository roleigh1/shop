const express = require("express");
const router = express.Router();
const cors = require("cors")
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(
    3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:"gnleinter1@gmail.com",
        pass:"element1._",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});
