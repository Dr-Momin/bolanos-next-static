import React from 'react';

const HeroTwo = () => {
  return (
    <div>
      <div className="bg-primary px-6 py-12 text-center  md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="w-80 mt-12 border-3 border-red-200 lg:mt-0 mx-auto lg:mx-0">
              <h1 className="text-center mt-2 mb-16 font-semibold tracking-tight text-3xl  bg-[#ffffff1f] py-6 px-8 rounded-xl text-white">
                How Bolanos <br />  Trucks Works ?
              </h1>
              <p className="text-center">Watch out the video</p>
            </div>
            <div className="mb-12 lg:mb-0">
              <img src="/images/img.png"
                   className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
