import React from "react";
import InputGroup from "./subcomponents/InputGroup";

const Hero = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold capitalize text-white">
              The easiest way to buy and manage trucking insurance
            </h1>

            <InputGroup />

            <p className="mt-5 text-white">No dot? You can still get a quote!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
