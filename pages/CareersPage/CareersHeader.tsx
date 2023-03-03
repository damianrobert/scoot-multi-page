import React from "react";
import Image from "next/image";
import header_white_circles from "../../assets/images/header-white-circles.svg";

const CareersHeader = () => {
  return (
    <div>
      <div
        className="bg-mobileCareersHeader max-w-[90rem] mx-auto md:bg-careersHeader h-40
       bg-no-repeat bg-cover relative"
      >
        <div
          className="w-full h-full absolute top-0 left-0 bg-[#2f3b59ac] 
        overflow-hidden"
        ></div>

        <div className="w-full h-full absolute top-0 left-0">
          <div>
            <div className="w-[19.4375rem] mx-auto pt-14 md:ml-10 md:mr-0">
              <h1
                className="text-center font-bold text-[2.5rem] leading-[3rem]
              text-white  md:text-[3.5rem]"
              >
                Careers
              </h1>
            </div>

            <div className="hidden md:block absolute right-0 bottom-[3rem]">
              <Image src={header_white_circles} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHeader;
