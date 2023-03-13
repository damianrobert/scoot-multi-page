import React from "react";
import Image from "next/image";
import header_white_circles from "../../assets/images/header-white-circles.svg";
import header_sm_image from "../../assets/images/careers-sm-header-image.png";
import header_md_image from "../../assets/images/careers-md-header-image.png";
import sm_left_arrow from "../../assets/images/careers-sm-left-arrow.svg";
import md_left_arrow from "../../assets/images/careers-md-left-arrow.svg";
import semi_circle from "../../assets/images/hero-semi-circle.svg";

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

      <div
        className="max-w-[90rem] mx-auto mt-14 relative flex flex-col
      lg:flex-row-reverse"
      >
        <div className="w-[19.4375rem] md:w-[40.625rem] mx-auto">
          <div className="md:hidden">
            <Image src={header_sm_image} alt="/" />
          </div>

          <div className="absolute right-0 top-[12rem] md:hidden">
            <Image src={sm_left_arrow} alt="/" />
          </div>

          <div className="hidden w-[27.8125rem] mx-auto md:block rounded-[50%] overflow-hidden">
            <Image src={header_md_image} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-[20rem]">
            <Image src={md_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-2 z-[-1]">
            <Image src={semi_circle} alt="/" />
          </div>
        </div>

        <div className="w-[19.4375rem] md:w-[35.8125rem] mx-auto mt-14">
          <h2
            className="text-[2rem] leading-8 font-bold text-darkNavy
           text-center tracking-[-1.42857px] md:text-5xl md:leading-[3rem]
           lg:text-left"
          >
            Care to join our mission?
          </h2>

          <p
            className="font-lexend text-[0.9375rem] leading-6 text-dimGrey
           text-center mt-8 lg:text-left"
          >
            We’re always looking for ambitious individuals to help us on our
            journey. If you’re passionate about our mission to provide clean,
            accessible transport to improve urban living we want to hear from
            you!
          </p>

          <div
            className="w-44 h-14 mx-auto bg-yellow mt-8 flex items-center justify-center
          text-white font-bold cursor-pointer hover:border-2 border-yellow 
          hover:bg-transparent hover:text-yellow lg:mx-0"
          >
            <p>Say Heloo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersHeader;
