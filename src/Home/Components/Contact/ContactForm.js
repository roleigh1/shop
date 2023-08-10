import React, { useState } from "react";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

const ContactForm = () => {
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
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
    <h1>Get in Touch with us</h1>
    <form className="form" onSubmit={handleSubmit}>
    <div className="inputWrapper">
      <TextField name="name" label="Name" required className="name" />
    </div>
    <div className="inputWrapper">
      <TextField name="email" label="Email" type="email" className="email" required />
    </div>
    <div className="inputWrapper">
      <TextField
        name="message"
        label="Message"
        multiline
        rows={4}
        required className="textField"
      />
    </div>
    <div className="buttonWrapper">
      <Button variant="contained" type="submit">{status}</Button>
    </div> 

    <style jsx>
      {`
      h1 {
        text-align:center; 
        opacity:0.7;
        margin-top:2rem;
      }
      .name {
        width: 20rem;
   
      }
      .email {
        width: 20rem;
     

      }
      .textField {
        width: 20rem;
       
      }
      .form {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items:center;
       
      }
      .inputWrapper, .buttonWrapper {
        margin-bottom: 1rem; /* Add margin between elements */
      }
      `}
    </style>
  </form>
</div>
  );
};

export default ContactForm;