import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageWrapper = ({children}) => {
  return (
    <main className="">
      <Navbar />
        {children}
      <Footer/>
    </main>
  );
};

export default PageWrapper;
