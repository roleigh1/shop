const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "robinl.leitner1@gmail.com",
    pass: "vltxqphdauxjyops",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Process the data as needed (e.g., sending an email)

    // For now, let's just send a success response back to the client
    res.status(200).json({ status: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error processing the form:", error);
    res.status(500).json({ status: "Error processing the form." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});