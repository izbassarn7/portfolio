import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-12 flex flex-col sm:flex-row justify-between items-center">
      <span className="primary-color text-lg font-medium">Izbassar Nurlan</span>

      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <p className="text-gray-600">izbassarnurlan@gmail.com</p>

        <a
          href="https://t.me/izbassarn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500"
        >
          <FaTelegram size={24} color="#0088cc" />
        </a>

        <a
          href="https://wa.me/77071927449?text=Hello%20Izbassar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-500"
        >
          <IoLogoWhatsapp size={24} color="#25d366" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
