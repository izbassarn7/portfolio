import React from 'react';
import aboutImg from '../assets/image-from-rawpixel-id-12363052-png.png';

function About() {
  return (
    <div className=" mx-auto my-12 max-w-[1200px]" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className=" mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-2">
            <h2 className="text-4xl font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg text-white right-10">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <img
          className="mx-auto md:py-0 py-8 "
          src={aboutImg}
          alt="about"
          width={300}
          height={300}
          style={{
            width: '500px',
            height: '400px',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default About;
