import React from 'react';
import PageWrapper from "@/components/Wrapper/PageWrapper";
import ImageBG from "@/components/subcomponents/ImageBG";
import SectionTwo from "@/components/AboutUs/SectionTwo";
import SectionThree from "@/components/AboutUs/SectionThree";
import SectionFour from "@/components/AboutUs/SectionFour";
import SectionFive from "@/components/AboutUs/SectionFive";
import SectionSix from "@/components/AboutUs/SectionSix";


const AboutUs = () => {
  return (
    <PageWrapper>
      <ImageBG
        image={"/images/img_14.png"}
        heading={"About Us"}
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionFive />
      <SectionSix />
    </PageWrapper>
  );
};

export default AboutUs;
