import React from 'react';
import SectionHeadingUnderLine from "@/components/subcomponents/SectionHeadingUnderline";
import Marque from "@/components/subcomponents/Marque";

const MarqueSection = () => {
  return (
    <div className="bg-white">
        <div className="bol-container">
          <SectionHeadingUnderLine
            heading={"Insurance Partners"}
          />
          <Marque />
        </div>
    </div>
  );
};

export default MarqueSection;
