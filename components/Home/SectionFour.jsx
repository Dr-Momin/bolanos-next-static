import React from 'react';

const SectionFour = () => {
  return (
    <>
      <div className="bg-white">
        <div className="bol-container">
          <div className=" px-6 py-12 text-center  md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="w-80 mt-12 border-3 border-red-200 lg:mt-0 mx-auto lg:mx-0">
                  <div className="text-primary mt-20 space-y-4">
                    <h3 className="font-bold">Speak with a Trucking Insurance Agent</h3>
                    <p className="text-sm">
                      Many of our in-house agents were truckers and truly know what truckers go through. Call today to get support from an agent dedicated to truck insurance.
                    </p>

                    <div>
                      <div className="phone text-sm">1 (513) 506-2400</div>
                      <div className="name text-sm">William Jones</div>
                    </div>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 max-w-lg">
                  <img src="/images/img_12.png"
                       className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
