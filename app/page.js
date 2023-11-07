import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";
import PageWrapper from "@/components/Wrapper/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>

      <Hero />

      <HeroTwo />

    </PageWrapper>
  );
}
