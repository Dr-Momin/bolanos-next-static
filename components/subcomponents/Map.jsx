import React from 'react';

const Map = () => {
  return (
    <div className={"bg-white"}>
      <div className="bol-container">
        <div className="h-[500px] w-full">
          <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0"
                  allowFullScreen></iframe>
        </div>
      </div>

    </div>
  );
};

export default Map;
