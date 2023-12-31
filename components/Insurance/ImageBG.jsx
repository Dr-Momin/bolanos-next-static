import React from "react";
import InputGroup from "@/components/subcomponents/InputGroup";

const ImageBg = ({heading, image}) => {
  return (
    <main>
      <div
        className="hero h-[28rem]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mt-10 text-3xl font-bold capitalize text-white my-auto">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageBg;
