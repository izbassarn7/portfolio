import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
        <div className="max-w-[800px] mx-auto">
          <div className="mt-6 bg-[#161616] rounded-xl">
            <div className="p-10">
              <form method="POST" action="https://getform.io/f/paqgnqka">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        id=""
                        name="name"
                        placeholder="Your Name"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400 
                      rounded-md focus:outline-none focus:border-pink-600"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        id=""
                        name="email"
                        placeholder="Your Email"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400 
                      rounded-md focus:outline-none focus:border-pink-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-2.5 relative">
                      <textarea
                        id=""
                        name="message"
                        placeholder="Your Message"
                        className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-400
                        rounded-md focus:outline-none focus:border-pink-600"
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-primary-color text-white text-lg font-bold py-3 rounded-xl hover:from-green-600 hover:to-blue-600"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
