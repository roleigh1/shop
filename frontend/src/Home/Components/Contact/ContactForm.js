import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  const contactUrl = process.env.REACT_APP_POST_CONTACT;

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details);
    let response = await fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ details }),
    });
    setStatus("Submit");
    await response.json();
    alert("Message sent");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-center opacity-70 mb-4">Get in Touch with us</h1>
      <form className="flex flex-col items-center mt-6" onSubmit={handleSubmit}>
        <div className="mb-4 w-80">
          <TextField name="name" label="Name" required fullWidth />
        </div>
        <div className="mb-4 w-80">
          <TextField name="email" label="Email" type="email" required fullWidth />
        </div>
        <div className="mb-4 w-80">
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            required
            fullWidth
          />
        </div>
        <div className="mb-4">
          <Button variant="contained" type="submit">
            {status}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
