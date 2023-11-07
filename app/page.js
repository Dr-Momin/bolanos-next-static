import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HeroTwo";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />

      <HeroTwo />
      <Footer />
    </main>
  );
}
