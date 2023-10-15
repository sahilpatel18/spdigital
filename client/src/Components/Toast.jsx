import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-4 max-w-sm w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <div>
            <p className="font-semibold">{message}</p>
            <p className="text-sm text-gray-600">
              Anyone with a link can now view this file.
            </p>
          </div>
        </div>
        <button onClick={onClose} className="ml-4">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
