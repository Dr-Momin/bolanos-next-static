import React from 'react';
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import ImageBG from "@/components/Insurance/ImageBG";
import SectionTwo from "@/components/Insurance/SectionTwo";
import SectionThree from "@/components/Insurance/SectionThree";
import SectionFour from "@/components/Insurance/SectionFour";

const Cargo = () => {
  return (
    <PageWrapper>
      <ImageBG
        heading={"Physical Damage Insurance"}
        image={"/images/img_3.png"}
      />

      <SectionTwo
        heading={"What Is Physical Damage Insurance?"}
        content={"Physical Damage Insurance is a type of insurance coverage that is designed to protect commercial trucking companies from financial loss due to physical damage to their vehicles."}
      />

      <SectionThree
        image={"/images/img_4.png"}
        heading={"3 Reasons for Getting Physical Damage Insurance"}
        bpOneHeading={"Protects against financial loss in the event of an accident"}
        bpOneContent={"Physical damage insurance can help cover the costs of repairing or replacing a truck if it is damaged in an accident."}
        bpTwoHeading={"Provides coverage for non-collision events"}
        bpTwoContent={"Physical damage insurance can also cover damage caused by events such as theft, vandalism, or natural disasters."}
        bpThreeHeading={"Provides peace of mind"}
        bpThreeContent={"With physical damage insurance, commercial truckers can have the peace of mind that comes with knowing they are financially protected in the event of damage to their vehicle."}
      />

      <SectionFour />
    </PageWrapper>
  );
};

export default Cargo;
