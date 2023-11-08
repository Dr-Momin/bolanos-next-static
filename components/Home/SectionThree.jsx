import React from 'react';
import SectionHeadingUnderLine from "@/components/subcomponents/SectionHeadingUnderline";

const SectionThree = () => {
  return (
    <div className="bg-white">
      <div className="bol-container text-primary">

        <SectionHeadingUnderLine
          heading={"Trucking Insurance Agents + Self-Serve Platform"}
        />

        <p className="text-center">
          Connect with an agent who can help you navigate the complexities of trucking insurance and use a modern platform to make your business more efficient
        </p>


        <div className="cards lg:flex lg:justify-around mt-10">
          <div className="card w-96 glass bg-white p-10 shadow-2xl">
            <figure><img src="/images/img_10.png" alt="car!"/></figure>
            <div className="card-body">
              <ol className="list-disc space-y-2">
                <li>Speak to a Real Person</li>
                <li>Experts All Things Trucking</li>
                <li>Former Owner Operators</li>
              </ol>
            </div>
          </div>

          <div className="card w-96 glass bg-white p-10 shadow-2xl">
            <figure><img src="/images/img_11.png" alt="car!"/></figure>
            <div className="card-body">
              <ol className="list-disc space-y-2">
                <li>Speak to a Real Person</li>
                <li>Experts All Things Trucking</li>
                <li>Former Owner Operators</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionThree;
