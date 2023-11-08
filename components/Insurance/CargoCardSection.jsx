import React from 'react';
import {MdDone} from "react-icons/md";

const CargoCardSection = () => {
  return (
    <div className="bg-white">
      <div className="bol-container overflow-x-hidden flex justify-between flex-wrap">

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl ">
          <div className="bg-primary mx-auto text-white p-2 h-12 w-12 text-3xl rounded-lg mb-6"><MdDone/></div>
          <a href="#">
            <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Complete in Minutes, All Online</h5>
          </a>
          <p className="text-center mb-3 font-normal text-gray-500 ">We've eliminated 100 questions applications, phone calls, and emails. Get coverage in minutes, rather than days!</p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl ">
          <div className="bg-primary mx-auto text-white p-2 h-12 w-12 text-3xl rounded-lg mb-6"><MdDone/></div>
          <a href="#">
            <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Get Covered Anytime, Anywhere</h5>
          </a>
          <p className="text-center mb-3 font-normal text-gray-500 ">Whether you are on the road at 8am or in your cab at 10pm, you can now get coverage 24/7.</p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl ">
          <div className="bg-primary mx-auto text-white p-2 h-12 w-12 text-3xl rounded-lg mb-6"><MdDone/></div>
          <a href="#">
            <h5 className="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Minor Driving Violations Accepted</h5>
          </a>
          <p className="text-center mb-3 font-normal text-gray-500 ">This A+ rated product accepts up to 4 minor driving violations and one loss up to $10,000 within the last 36 months.</p>
        </div>

      </div>
    </div>
  );
};

export default CargoCardSection;
