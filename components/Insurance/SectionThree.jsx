import React from 'react';
import {MdDone} from "react-icons/md";

const SectionThree = ({
                        heading,
                        bpOneHeading,
                        bpOneContent,
                        bpTwoHeading,
                        bpTwoContent,
                        bpThreeHeading,
                        bpThreeContent
                      }) => {
  return (
    <div className=" bg-white">
      <div className="bol-container">
        <div className="grid lg:grid-cols-2 ">
          <img src="/images/img_2.png" className="max-w-md rounded-lg shadow-2xl"/>
          <div className="text-primary  space-y-8">
            <h4 className="text-center font-bold">{heading}</h4>

            <div className="flex gap-4">
              <div className="bg-primary text-white p-2 h-8 rounded-lg"><MdDone/></div>
              <div className="">
                <h5>{bpOneHeading}</h5>
                <p>{bpOneContent}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-white p-2 h-8 rounded-lg"><MdDone/></div>
              <div className="">
                <h5>{bpTwoHeading}</h5>
                <p>{bpTwoContent}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-primary text-white p-2 h-8 rounded-lg"><MdDone/></div>
              <div className="">
                <h5>{bpThreeHeading}</h5>
                <p>{bpThreeContent}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
