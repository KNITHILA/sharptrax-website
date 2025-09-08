// src/components/FloatingWhatsApp.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "9345283475"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default FloatingWhatsApp;
