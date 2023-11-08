import React from 'react';

const Card = ({
                image,
                name,
                lead
              }) => {
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white w-72 rounded-xl bg-clip-border">
        <div
          className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
          <img src={image} alt="profile-picture"/>
        </div>
        <div className="p-6 text-center">
          <h4
            className="block mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p
            className="block font-sans text-base font-medium leading-relaxed text-primary">
            {lead}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Card;
