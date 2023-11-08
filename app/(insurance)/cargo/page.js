import React from 'react';
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import ImageBG from "@/components/Insurance/ImageBG";
import SectionTwo from "@/components/Insurance/SectionTwo";
import SectionThree from "@/components/Insurance/SectionThree";
import SectionFour from "@/components/Insurance/SectionFour";
import CargoCardSection from "@/components/Insurance/CargoCardSection";

const Cargo = () => {
  return (
    <PageWrapper>
      <ImageBG
        heading={"Motor Truck Cargo Insurance"}
        image={"/images/img_5.png"}
      />

      <SectionTwo
        heading={"What Is Motor Truck Cargo Insurance?"}
        content={"Motor Truck Cargo Insurance is designed to protect trucking companies from financial losses due to damage or loss of goods being transported. This insurance policy covers the cargo being transported by the trucking company against damage or loss caused by accidents, theft, or other unforeseen events."}
      />


      <CargoCardSection />

      <SectionFour />
    </PageWrapper>
  );
};

export default Cargo;
