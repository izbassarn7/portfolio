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
              Motivated 4th year student at SDU seeking React developer
              opportunities in Kazakhstan. Passionate about creating
              high-quality web experiences and eager to contribute to innovative
              companies.
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
