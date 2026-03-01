import { useState } from "react";

import SuccessSend from "./SuccessSend";

const ContactForm = () => {
  const contactUrl = process.env.REACT_APP_POST_CONTACT;
  const [messageSend, setMessageSend] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

 
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
        setMessageSend(true); 
     
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
    <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
    
      {messageSend ? (
        <SuccessSend />
      ) : (
        <>
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <form
            className="mt-6 flex flex-col items-center gap-2 space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="flex w-80 flex-col gap-2">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:ring-primary-500 w-full rounded-lg border bg-gray-50 p-2.5 text-sm shadow-sm"
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
                  className="focus:ring-primary-500 w-full rounded-lg border bg-gray-50 p-3 text-sm shadow-sm"
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
                  className="focus:ring-primary-500 w-full rounded-lg border bg-gray-50 p-2.5 text-sm shadow-sm"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 sm:w-fit"
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
