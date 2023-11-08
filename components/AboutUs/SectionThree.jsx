import React from 'react';
import SectionHeadingUnderLine from "@/components/subcomponents/SectionHeadingUnderline";

const SectionThree = () => {
  return (
    <div className="bg-white">
      <div className="bol-container ">
        <SectionHeadingUnderLine
          heading={"Helping modern truckers thrive"}
        />


        <div className="text-primary mt-8" id="reviews">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="md:columns-2 lg:columns-3 gap-4 space-y-8">

              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl ">
                <h5 className="text-lg text-center font-bold text-gray-700">Challenge</h5>
                <p className="mt-8 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non.
                </p>
              </div>


              <div
                className="h-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl ">
                <h5 className="text-lg text-center font-bold text-gray-700 mt-12">Solution</h5>
                <h6 className={"text-center text-primary font-bold mt-3"}>Trucking Expertise</h6>

                <p className="mt-6 text-center text-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum distinctio ea harum obcaecati odit ratione recusandae veritatis.
                </p>
                <img src="/images/img_10.png" className="w-full mx-auto mt-8" alt="car!"/>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl">
                <h5 className="text-lg text-center font-bold text-gray-700">Challenge</h5>
                <p className="mt-8 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non.
                </p>

              </div>


              <div
                className="h-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl ">
                <h5 className="text-lg text-center font-bold text-gray-700 mt-12">Solution</h5>
                <h6 className={"text-center text-primary font-bold mt-3"}>Modern Platform System</h6>

                <p className="mt-6 text-center text-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum distinctio ea harum obcaecati odit ratione recusandae veritatis.
                </p>
                <img src="/images/img_11.png" className="w-full mx-auto mt-8" alt="car!"/>
              </div>


              <div
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl ">
                <h5 className="text-lg text-center font-bold text-gray-700">Challenge</h5>
                <p className="mt-8 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, non.
                </p>
              </div>


              <div
                className="h-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-xl ">
                <h5 className="text-lg text-center font-bold text-gray-700 mt-12">Solution</h5>
                <h6 className={"text-center text-primary font-bold mt-3"}>Innovative Partnerships</h6>

                <p className="mt-6 text-center text-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum distinctio ea harum obcaecati odit ratione recusandae veritatis.
                </p>
                <img src="/images/img_15.png" className="w-3/4 mx-auto mt-8" alt="car!"/>
              </div>

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SectionThree;
