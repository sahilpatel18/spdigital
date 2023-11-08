import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SuccessPageStyles.css";
import GradientBackground from "../Styles/GradientBackground";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 bg-white overflow-y-hidden">
      <GradientBackground />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg z-10 relative transition-transform hover:-translate-y-1 hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-800">
          Purchase Successful!
        </h2>
        <p className="text-gray-500 mt-2">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
          >
            Return Home
          </Link>
        </div>
        <div className="mt-2">
          <Link
            to="/solutions"
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
          >
            View More Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
