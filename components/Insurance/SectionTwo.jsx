import React from "react";

const SectionTwo = ({heading, content}) => {
  return (
    <div className="bg-white">
      <div className="bol-container text-black">
        <h2 className="text-2xl font-semibold text-primary">
          {heading}
        </h2>
        <div className="h-1 w-64 bg-primary"></div>
        <p className="mt-6 text-primary">
          {content}
        </p>
        <div className="mt-5">
          <button className="btn bg-primary text-white mr-4 capitalize">
            Get All Insurance
          </button>
          <button className="btn btn-outline text-primary capitalize">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
