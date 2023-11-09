"use client"
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white">
      <div className="bol-container">
        <div className="max-w-full mx-auto p-5 bg-[#30577e1f]">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className=" text-primary md:col-span-4 p-10 ">
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get in touch with us.
              </h3>

              <div className="find mt-20">
                <h5 className="font-bold text-lg">Find us at</h5>
                <p className="text-sm">66 Waverley Dr Ste 630, Frederick, MD 21702</p>
              </div>

              <div className="reach-out mt-10">
                <h5 className="font-bold text-lg">Reach out to us at</h5>
                <p className="text-sm mt-2">operations@bceins.com</p>
                <p className="text-sm mt-2">301-591-6550</p>
              </div>
            </div>

            <form className="md:col-span-8 p-10 bg-white">
              <h3 className="font-bold mb-5 text-primary">Contact Us</h3>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text" placeholder="Your Name"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name" type="email" placeholder="Email"/>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                         htmlFor="grid-password">
                    Your Message
                  </label>
                  <textarea rows="10"
                            className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight bg-white text-primary" type="checkbox"/>
                      <span className="text-sm">
                                I agree to the privacy policy.
                            </span>
                    </label>
                  </div>
                  <button
                    className="bg-primary focus:outline-none text-white font-bold py-2 px-20 rounded"
                    type="submit">
                    Submit
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
