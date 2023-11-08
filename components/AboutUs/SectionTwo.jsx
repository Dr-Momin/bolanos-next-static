import React from 'react';

const SectionTwo = () => {
  return (
    <div className="bg-white">
        <div className="bol-container">
          <div className=" px-6 py-12 text-center  md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="w-96 mt-12 border-3 border-red-200 lg:mt-0 mx-auto lg:mx-0">
                  <div className="text-primary mt-20 space-y-4">
                    <h3 className="font-bold text-2xl">We Are Built for Truckers</h3>
                    <p className="text-sm leading-6">
                      Building integrated insurance solutions that help trucking businesses thrive. Lorem ipsum dolor sit amet consectetur. Aliquet egestas enim at commodo vitae ipsum fermentum enim. Amet placerat eget elementum ante dignissim. Sed facilisi placerat purus ut nam nibh malesuada amet viverra.
                    </p>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0 max-w-lg">
                  <img src="/images/img_13.png"
                       className="max-w-md rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SectionTwo;
