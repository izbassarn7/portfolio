import React from 'react';
import proj1 from '../assets/242456365-48018411-ed96-4684-93ff-475ed87c57b0.png';
import proj2 from '../assets/Screenshot 2024-03-20 at 3.11.15 PM.png';
import proj3 from '../assets/Screenshot 2024-03-20 at 3.13.01 PM.png';
import proj4 from '../assets/18770530256662.webp';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

function Work() {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className=" text-4xl font-bold pb-5 primary-color">Work</p>
        <p className=" text-gray-400">Check out some of my projects</p>
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow=[#040c16] group container rounded-md flex justify-center items-center
        h-[230px] bg-cover tracking-wider
        "
        >
          <img src={proj1} alt="project1" layout="fill" objectFit="cover" />
          <div
            className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
           justify-center items-center
          "
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              KitapTap
            </span>
            <div className="pt-8 text-center">
              <a href="https://github.com/izbassarn7/KitapTap.git">
                <button className="items-center text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow=[#040c16] group container rounded-md flex justify-center items-center
        h-[230px] bg-cover tracking-wider
        "
        >
          <img
            src={proj2}
            alt="project1"
            layout="fill"
            objectFit="cover"
            style={{ objectFit: 'fill', layout: 'fill' }}
          />
          <div
            className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
           justify-center items-center
          "
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              MiniMusic
            </span>
            <div className="pt-8 text-center">
              <a href="https://mini-musicapp.netlify.app/">
                <button className="items-center text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow=[#040c16] group container rounded-md flex justify-center items-center
        h-[230px] bg-cover tracking-wider
        "
        >
          <img src={proj3} alt="project1" layout="fill" objectFit="cover" />
          <div
            className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
           justify-center items-center
          "
          >
            <span className="text-2xl font-bold text-white tracking-wider">
              HTML/CSS Portfolio
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="items-center text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow=[#040c16] group container rounded-md flex justify-center items-center
        h-[200px] bg-cover tracking-wider col-start-2
        "
        >
          <img src={proj4} alt="project1" />
          <div
            className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
           justify-center items-center
          "
          >
            <span className="text-2xl font-bold text-white tracking-wider text-center">
              COVID-19 Data Visualization Dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
