import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className=" bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="  text-3xl font-bold primary-color ml-4 ">IZBASSARN</h1>

      <ul className=" hidden md:flex ">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className=" block md:hidden mr-6" onClick={handleToggle}>
        {navbarOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
      </div>

      <div
        className={
          navbarOpen
            ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className=" font-bold primary-color text-3xl m-8">MENU</h1>
        <ul className=" p-6 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
