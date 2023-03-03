import Image from "next/image";
import header_white_circles from "../../assets/images/header-white-circles.svg";
import sm_left_arrow from "../../assets/images/about-sm-left-arrow.svg";
import md_left_arrow from "../../assets/images/about-md-left-arrow.svg";
import sm_right_arrow from "../../assets/images/about-sm-right-arrow.svg";
import md_right_arrow from "../../assets/images/hero-md-right-arrow.svg";
import header_sm_top_img from "../../assets/images/about-sm-header-top-img.png";
import header_md_top_img from "../../assets/images/about-md-header-top-img.png";
import header_sm_bottom_img from "../../assets/images/about-sm-header-bottom-img.png";
import header_md_bottom_img from "../../assets/images/about-md-header-bottom-img.png";
import header_semi_circle from "../../assets/images/hero-semi-circle.svg";

function AboutHeader() {
  return (
    <div>
      <div
        className=" bg-mobileAboutHeader bg-no-repeat md:bg-aboutHeader h-40  
      md:h-[12.5rem] max-w-[90rem] mx-auto relative"
      >
        <div
          className="w-full h-full absolute top-0 left-0 bg-[#2f3b59ac] 
        overflow-hidden"
        ></div>

        <div className="absolute w-full h-full top-0 left-0">
          <div>
            <div className="w-[19.4375rem] mx-auto pt-14 md:ml-10 md:mr-0">
              <h1
                className="text-center text-white text-[2.5rem] md:text-[3.5rem]
              font-bold"
              >
                About
              </h1>
            </div>

            <div className="hidden md:block absolute bottom-[4.5rem] right-0">
              <Image src={header_white_circles} alt="/" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36 lg:max-w-[90rem] mx-auto flex flex-col lg:flex-row-reverse">
        <div className="relative">
          <div className="w-fit mx-auto md:hidden">
            <Image src={header_sm_top_img} alt="/" />
          </div>

          <div
            className="hidden md:block w-fit rounded-[50%] mx-auto overflow-hidden
          lg:mr-28 lg:ml-16"
          >
            <Image src={header_md_top_img} alt="/" />
          </div>

          <div className="absolute right-0 top-32 md:hidden">
            <Image src={sm_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-32 lg:top-52">
            <Image src={md_left_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute right-0 top-0  z-[-1]">
            <Image src={header_semi_circle} alt="/" />
          </div>
        </div>

        <div className="w-[19.4375rem] md:w-[35.8125rem] mx-auto lg:ml-40 pt-14">
          <p
            className="font-bold text-[2rem] md:text-5xl leading-8 md:leading-[3rem] 
           text-center  text-darkNavy tracking-[-2.14286px] lg:text-left"
          >
            Mobility for the digital era
          </p>

          <p
            className="font-lexend text-dimGrey text-[0.9375rem] 
          leading-6 text-center mt-6 lg:text-left"
          >
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </div>
      </div>

      <div className="mt-36 lg:max-w-[90rem] mx-auto flex flex-col lg:flex-row">
        <div className="relative">
          <div className="w-fit mx-auto md:hidden">
            <Image src={header_sm_bottom_img} alt="/" />
          </div>

          <div className="hidden md:block w-fit mx-auto lg:ml-40 lg:mr-16">
            <Image src={header_md_bottom_img} alt="/" />
          </div>

          <div className="absolute left-0 top-32 md:hidden">
            <Image src={sm_right_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute left-0 top-0">
            <Image src={md_right_arrow} alt="/" />
          </div>

          <div className="hidden md:block absolute left-0 top-0 rotate-180 z-[-1]">
            <Image src={header_semi_circle} alt="/" />
          </div>
        </div>

        <div className="w-[19.4375rem] md:w-[35.8125rem] mx-auto  pt-14">
          <p
            className="font-bold text-[2rem] md:w-96 md:text-5xl leading-8 
            md:leading-[3rem] text-center text-darkNavy md:mx-auto lg:text-left
           lg:mx-0"
          >
            Better urban living
          </p>

          <p
            className="font-lexend text-dimGrey text-[0.9375rem] 
          leading-6 text-center mt-6 lg:text-left"
          >
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
