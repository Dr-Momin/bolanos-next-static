import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import PageWrapper from "@/components/Wrapper/PageWrapper";
import Testimonial from "@/components/Testimonial";
import InformationSection from "@/components/InformationSection";
import InformationSectionReverse from "@/components/InformationSectionReverse";
import InformationHeading from "@/components/InformationHeading";
import SectionHeadingUnderLine from "@/components/subcomponents/SectionHeadingUnderline";
import MarqueSection from "@/components/Home/MarqueSection";
import SectionThree from "/components/Home/SectionThree";
import SectionFour from "/components/Home/SectionFour";

export default function Home() {
  return (
    <PageWrapper>
      <Hero/>
      <MarqueSection/>
      <SectionThree/>
      <SectionFour/>
      <HeroTwo/>
      <InformationHeading/>
      <InformationSection
        headingNumber={"1"}
        heading={"Quote"}
        subHeading={"Find the best Price"}
        subContent={"Enter your information once, then get new quotes when you need them."}
        bpOneContent={"Enter your information"}
        bpTwoContent={"Choose your limits and coverages"}
        bpThreeContent={"Get Multiple Quotes"}
      />

      <InformationSectionReverse
        headingNumber={"2"}
        heading={"Purchase"}
        subHeading={"Get quotes, change vehicles and drivers, and pull COIs anytime"}
        subContent={"And you can speak with your agent anytime"}
        bpOneContent={"Enter your information"}
        bpTwoContent={"Choose your limits and coverages"}
        bpThreeContent={"Get Multiple Quotes"}
      />

      <InformationSection
        headingNumber={"3"}
        heading={"Manage"}
        subHeading={"Compare quotes and purchase the best policy for you"}
        subContent={"We offer flexible payment terms and financing to help with your truck insurance payments"}
        bpOneContent={"Enter your information"}
        bpTwoContent={"Choose your limits and coverages"}
        bpThreeContent={"Get Multiple Quotes"}
      />

      <MarqueSection/>
      <Testimonial/>
    </PageWrapper>
  );
}
