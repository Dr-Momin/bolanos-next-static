import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageWrapper = ({children}) => {
  return (
    <main className="">
      <Navbar />
        {children}
      <Footer/>
      <div className="bg-white">
        <p className="text-center text-sm text-primary py-4">© 2023 All Rights Reserved. Bolanos</p>
      </div>
    </main>
  );
};

export default PageWrapper;
