import React from 'react';
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import ImageBG from "@/components/Insurance/ImageBG";
import SectionTwo from "@/components/Insurance/SectionTwo";
import SectionThree from "@/components/Insurance/SectionThree";
import SectionFour from "@/components/Insurance/SectionFour";
import CargoCardSection from "@/components/Insurance/CargoCardSection";
import Testimonial from "@/components/Testimonial";
import InformationSection from "@/components/Insurance/InformationSection";
import InformationSectionReverse from "@/components/Insurance/InformationSectionReverse";

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

      <InformationSection
        heading={"Enter Your Information"}
        bpOneNumber={"1"}
        bpOneContent={"Accepting customers with up to 4 minor driving violations."}
        bpTwoNumber={"2"}
        bpTwoContent={"One loss up to $10,000 within the last 36 months"}
        bpThreeNumber={"3"}
        bpThreeContent={"Fast by enabling instantaneous coverage."}
      />

      <InformationSectionReverse
        heading={"Purchase Your Policy and Get Covered"}
        bpOneNumber={"4"}
        bpOneContent={"Accept your quote and select your payment plan"}
        bpTwoNumber={"5"}
        bpTwoContent={"Bind your MTC policy"}
        bpThreeNumber={"6"}
        bpThreeContent={"Drive with peace of mind that your cargo is covered!"}
      />

      <SectionFour />
    </PageWrapper>
  );
};

export default Cargo;
