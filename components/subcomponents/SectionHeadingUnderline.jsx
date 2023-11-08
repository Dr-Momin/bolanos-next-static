import React from 'react';

const SectionHeadingUnderLine = ({heading}) => {
  return (
    <div className={"bg-white"}>
      <div className="mb-4 space-y-4 px-6 md:px-0 text-primary">
        <h2 className="text-center text-2xl font-bold ">
          {heading}
        </h2>
        <div className="h-1 w-40 bg-primary mx-auto"></div>
      </div>
    </div>
  );
};

export default SectionHeadingUnderLine;
