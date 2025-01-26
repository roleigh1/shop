import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = () => {
  const contactUrl = process.env.REACT_APP_POST_CONTACT;

  // State für die Eingabefelder
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ formData }),
    });
    if (response.ok) {
      alert("Message sent");

      // Textfelder leeren
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">

      <form className="flex flex-col items-center mt-6" onSubmit={handleSubmit}>
        <div className="mb-4 w-80">
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="mb-4 w-80">
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="mb-4 w-80">
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <div className="mb-4">
          <Button variant="contained" type="submit">
            send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
