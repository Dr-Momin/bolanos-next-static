import React from 'react';
import Card from "@/components/AboutUs/TeamCard";

const SectionFour = () => {
  return (
    <div className="bg-white">
        <div className="bol-container px-8">

          <div className="flex justify-between">
            <div className="mb-4 space-y-4 px-6 md:px-0 text-primary">
              <h2 className=" text-2xl font-bold ">
                The Leadership tem behind BOLANOS
              </h2>
              <div className="h-1 w-80 bg-primary"></div>
            </div>

            <div className="btn btn-outline text-primary">
              Show More
            </div>
          </div>

          <div className="flex justify-between flex-wrap">
            <Card
              image={"/team-members/img.png"}
              name={"Hugo Savedra"}
              lead={"CEO"}
            />

            <Card
              image={"/team-members/img_1.png"}
              name={"Angu Tamba"}
              lead={"Manager"}
            />

            <Card
              image={"/team-members/img_2.png"}
              name={"Oka Tomoaki"}
              lead={"Manager"}
            />

            <Card
              image={"/team-members/img.png"}
              name={"William"}
              lead={"Manager"}
            />
          </div>


        </div>
    </div>
  );
};

export default SectionFour;
