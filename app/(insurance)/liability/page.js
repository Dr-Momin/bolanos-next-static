import React from 'react';
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import Insurance from "@/components/Wrapper/Insurance";
import ImageBG from "@/components/Insurance/ImageBG";
import SectionTwo from "@/components/Insurance/SectionTwo";
import SectionThree from "@/components/Insurance/SectionThree";
import SectionFour from "@/components/Insurance/SectionFour";

const Page = () => {
  return (
    <PageWrapper>

      <ImageBG
        heading={"General Liability Insurance"}
        image={"/images/img_5.png"}
      />

      <SectionTwo
        heading={"What Is General Liability Insurance?"}
        content={"This type of insurance protects businesses from financial losses due to lawsuits or claims of property damage, bodily injury or other types of harm caused by the business's operations. This insurance covers the costs of legal fees, settlements, and judgments."}
      />

      <SectionThree
        image={"/images/img_6.png"}
        heading={"3 Reasons for Getting GL Insurance"}
        bpOneHeading={"Protects against financial loss if the trucker is at fault of an accident"}
        bpOneContent={"General liability insurance can help cover the costs of property damage or medical bills if a trucker is found to be at fault in an accident."}
        bpTwoHeading={"Required by some brokers and shippers"}
        bpTwoContent={"Depending on the broker or shipper, commercial truckers may be required to carry general liability insurance as a condition of employment."}
        bpThreeHeading={"Provides peace of mind"}
        bpThreeContent={"With general liability insurance, commercial truckers can have the peace of mind that comes with knowing they are financially protected in the event of an accident."}
      />

      <SectionFour />
    </PageWrapper>
  );
};

export default Page;
