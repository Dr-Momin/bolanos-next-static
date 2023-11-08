import React from 'react';
import {MdDone} from "react-icons/md";

const SectionFive = () => {
  return (
    <div className="bg-white">
        <div className="bol-container">

          <div className="bg-white px-6 py-12 text-center  md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
              <div className="grid  gap-12 lg:grid-cols-2">

                <div className="mb-12 lg:mb-0">
                  <img src="/images/img_16.png"
                       className="w-full " alt=""/>
                </div>

                <div className=" mt-12 text-primary lg:mt-0 mx-auto lg:mx-0">
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <div className="h-1 w-20 bg-primary"></div>
                  <p className="mt-8 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ea, illo minus nisi quasi tempore tenetur voluptatum. Error exercitationem pariatur quasi reprehenderit sequi. Animi corporis hic iusto natus praesentium quo reiciendis rerum veritatis! Aliquam atque cum, doloribus ea eum possimus quidem temporibus. Ab ea placeat quia ut. Corporis enim, numquam.</p>

                  <button className="btn text-white bg-primary mt-8">Explore More</button>
                </div>


              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default SectionFive;
