import React, { useState } from "react";

import SuccessSend from "./SuccessSend";

const ContactForm = () => {
  const contactUrl = process.env.REACT_APP_POST_CONTACT;
  const [messageSend, setMessageSend] = useState(false);

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

    try {
      const response = await fetch(contactUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSend(true); // Erfolgreicher Versand
        // Textfelder leeren
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      {/* Zeige SuccessSend-Komponente, wenn messageSend true ist */}
      {messageSend ? (
        <SuccessSend />
      ) : (
        <>
          <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <form
            className="flex flex-col items-center mt-6 space-y-8 gap-2"
            onSubmit={handleSubmit}
          >
            <div className="w-80 flex gap-2 flex-col">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border text-sm rounded-lg focus:ring-primary-500 w-full p-2.5"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border text-sm rounded-lg focus:ring-primary-500 w-full p-3"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="shadow-sm bg-gray-50 border text-sm rounded-lg focus:ring-primary-500 w-full p-2.5"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
