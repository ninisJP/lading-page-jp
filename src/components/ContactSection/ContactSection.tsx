import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="bg-white text-black py-10 px-6 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-end max-w-screen-lg space-x-6">
        <a
          href="mailto:ventas@friotemp.com.pe"
          className="flex items-center space-x-1 hover:underline text-sm"
        >
          <span>✉️</span>
          <span>ventas@friotemp.com.pe</span>
        </a>

        <a
          href="tel:+5114612277"
          className="flex items-center space-x-1 hover:underline text-sm"
        >
          <span>📞</span>
          <span>Central: (+511) 461-2277</span>
        </a>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">
          SOLICITE SU COTIZACIÓN
        </button>
      </div>
    </div>
  );
};

export default ContactSection;