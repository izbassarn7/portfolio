import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';

function Skills() {
  return (
    <div
      className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center
     md:flex md:justify-between md:items-center"
    >
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="html" />
        <p className="mt-4">HTML</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="css" />
        <p className="mt-4">CSS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={js} alt="js" />
        <p className="mt-4">JS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="tailwind" />
        <p className="mt-4">Tailwind</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="react" />
        <p className="mt-4">React</p>
      </div>
    </div>
  );
}

export default Skills;
