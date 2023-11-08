import React from "react";
import InputGroup from "@/components/subcomponents/InputGroup";

const ImageBg = ({heading, image}) => {
  return (
    <main>
      <div
        className="hero h-72 "
        style={{
          backgroundImage: `url(${image})`,
          objectFit: "cover"
        }}
      >
        <div className="bg-opacity-60 "></div>
          <div className="max-w-md ">
            <h1 className="mt-10 text-3xl font-bold capitalize text-white ">
              {heading}
            </h1>
        </div>
      </div>
    </main>
  );
};

export default ImageBg;
