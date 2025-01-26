import React from "react";

export default function SuccessSend() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#ccff90"
            d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
          ></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold text-center">Thank you!</h2>
      <p className="text-sm text-center text-gray-700">
        Your message has been sent.
      </p>
    </div>
  );
}
