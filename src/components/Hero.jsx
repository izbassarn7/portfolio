import React from 'react';
import heroimage from '../assets/profile-pic_.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70hv] mx-auto py-8 bg-black ">
      <div className="col-span-1 my-auto mx-auto">
        <div className="w-[300px] h-auto lg:w-[400px] hover:scale-105 ease-in-out duration-300">
          <img src={heroimage} alt="Hero" />
        </div>
      </div>
      <div className="col-span-2 px-5 my-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            cursor={true}
            sequence={[
              'Web Developer',
              1000,
              'Designer',
              1000,
              'Student',
              1000,
            ]}
            repeat={Infinity}
            wrapper="span"
            speed={50}
          />
        </h1>

        <p className="text-white text-lg sm:text-xl lg:text-2xl my-5">
          I'm a web developer and designer based in the Almaty, Kazakhstan. I
          specialize in creating modern and responsive websites.
        </p>

        <div className="py-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-600 to-green-600 text-white text-lg font-bold hover:from-green-600 hover:to-blue-600"
          >
            Download CV
          </a>
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl border-gray-700 border-2 bg-gray-800 text-white text-lg font-bold hover:bg-gray-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
