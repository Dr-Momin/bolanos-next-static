import React from 'react';

const InformationSection = () => {
  return (
    <div>
        <div className="">
          <div className="bg-white px-6 py-12 text-center  md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">

                <div className=" mt-12 text-primary lg:mt-0 mx-auto lg:mx-0">
                  <div className="bg-primary text-white p-3 px-6 rounded-full w-fit mb-8 mx-auto lg:mx-0 lg:mb-16">
                    {heading}
                  </div>
                  <ol className="flex flex-col gap-6">
                    <li className="">
                      <span className="py-2 px-3.5 bg-primary text-white rounded-full mr-6">{bpOneNumber}</span>
                      {bpOneContent}
                    </li>
                    <li className="">
                      <span className="py-2 px-3.5 bg-primary text-white rounded-full mr-6">{bpTwoNumber}</span>
                      {bpTwoContent}
                    </li>
                    <li className="">
                      <span className="py-2 px-3.5 bg-primary text-white rounded-full mr-6">{bpThreeNumber}</span>
                      {bpThreeContent}
                    </li>
                  </ol>
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
