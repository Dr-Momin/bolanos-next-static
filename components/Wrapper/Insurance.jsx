import React from 'react';
import ImageBG from "@/components/Insurance/ImageBG";
import SectionTwo from "@/components/Insurance/SectionTwo";
import SectionFour from "@/components/Insurance/SectionFour";
import SectionThree from "@/components/Insurance/SectionThree";

const Insurance = () => {
  return (
    <main>

      <ImageBG
        heading={"Auto liability Insurance"}
        image={"/images/img_1.png"}
      />

      <SectionTwo
        heading={"What is Auto Liability Insurance?"}
        content={"Auto Liability Insurance protects drivers from financial loss in case\n" +
          "          they cause an accident while driving. Auto Liability Insurance can\n" +
          "          cover damages to other people's property, medical expenses, and lost\n" +
          "          wages if you are found at fault in an accident."}
      />

      <SectionThree
        heading={"3 Reasons for Getting Auto Liability Insurance"}
        bpOneHeading={"Protects against financial loss in the event of an accident"}
        bpOneContent={"Auto liability insurance can help cover the costs of property damage, medical bills, and legal fees if a trucker is found to be at fault in an accident."}
        bpTwoHeading={"Required by law"}
        bpTwoContent={"Depending on the state, commercial truckers may be legally required to carry auto liability insurance. Failure to do so can result in fines, license suspension, and even legal action."}
        bpThreeHeading={"Protects against lawsuits"}
        bpThreeContent={"If a trucker is sued by another party after an accident, auto liability insurance can help cover the costs of legal fees and any damages awarded."}
      />

      <SectionFour />

    </main>
  );
};

export default Insurance;
