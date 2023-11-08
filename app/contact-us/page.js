import React from 'react';
import PageWrapper from "/components/Wrapper/PageWrapper";
import ImageBG from "/components/subcomponents/ImageBG";
import Map from "/components/subcomponents/Map";
import Faq from "/components/Faq";
import ContactForm from "/components/ContactForm";

const ContactUs = () => {
  return (
    <PageWrapper>
      <ImageBG
        image={"/images/img_9.png"}
        heading={"Contact Us"}
      />
      <ContactForm />
      <Faq />
      <Map />
    </PageWrapper>
  );
};

export default ContactUs;
