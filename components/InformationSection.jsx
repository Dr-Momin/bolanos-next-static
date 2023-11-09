import React from 'react';
import {MdDone} from "react-icons/md";

const InformationSection = ({
                              headingNumber,
                              heading,
                              subHeading,
                              subContent,
                              bpOneContent,
                              bpTwoContent,
                              bpThreeContent
                            }) => {
  return (
    <div>
      <div className="">
        <div className="bg-white px-6 py-12 text-center  md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div className=" mt-12 text-primary lg:mt-0 mx-auto lg:mx-0">
                <div
                  className="bg-primary text-white p-3 pr-12 rounded-full w-fit mb-8 mx-auto lg:mx-0 lg:mb-8 flex gap-4 items-center">
                  <div className="bg-white font-bold text-primary py-1 px-3 rounded-full">
                    {headingNumber}
                  </div>
                  <div className={"text-xl font-bold"}>
                    {heading}
                  </div>
                </div>
                <div className="flex flex-col gap-4">

                  <div className="space-y-2">
                    <h5 className={"font-semibold text-black"}>{subHeading}</h5>
                    <p>{subContent}</p>
                  </div>

                  <div className="flex ">
                    <div className="py-2 px-2 bg-primary text-white rounded-full mr-6"><MdDone/></div>
                    <div className="">
                      {bpOneContent}
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="py-2 px-2 bg-primary text-white rounded-full mr-6"><MdDone/></div>
                    <div className="">
                      {bpTwoContent}
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="py-2 px-2 bg-primary text-white rounded-full mr-6"><MdDone/></div>
                    <div className="">
                      {bpThreeContent}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 lg:mb-0">
                <img src="/images/img_8.png"
                     className="w-full " alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
