import Image from "next/image";
import Link from "next/link";
import sm_right_arrow from "../../assets/images/sm-right-arrow.svg";
import md_right_arrow from "../../assets/images/md-right-arrow.svg";
import lg_right_arrow from "../../assets/images/lg-right-arrow.svg";
import arrow_line from "../../assets/images/arrow-line.svg";
import header_white_circles from "../../assets/images/header-white-circles.svg";
import locate_with_app from "../../assets/images/locate-with-app.svg";
import pick_your_scooter from "../../assets/images/pick-your-scooter.svg";
import enjoy_the_ride from "../../assets/images/enjoy-the-ride.svg";
import md_locate_with_app from "../../assets/images/md-locate-with-app.svg";
import md_pick_your_scooter from "../../assets/images/md-pick-your-scooter.svg";
import md_enjoy_the_ride from "../../assets/images/md-enjoy-the-ride.svg";
import tablet_vertical_line from "../../assets/images/tablet-vertical-line.svg";
import horizontal_line from "../../assets/images/horizontal-line.svg";

function HomeHeader() {
  return (
    <div>
      <div
        className="relative max-w-[90rem] mx-auto h-[40.625rem] bg-homeMobileHeader bg-no-repeat
       md:bg-homeHeader overflow-hidden"
      >
        <div className="absolute w-full h-full bg-[#2f3b59ac] "></div>

        <div className="absolute w-full h-full">
          <div
            className="w-[19.4375rem] md:w-[35.8125rem] mx-auto pt-16 z-30
          lg:ml-[10.3125rem] lg:pt-40"
          >
            <h1
              className="font-bold text-5xl leading-[2.5rem] text-white text-center
            lg:text-left"
            >
              Scooter sharing made simple
            </h1>

            <p
              className="w-full font-lexend text-white text-center text-base
             mt-8 font-light lg:text-left lg:ml-24 lg:w-[25.3125rem]"
            >
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you’re away!
            </p>

            <div
              className="flex justify-center items-center w-[11.25rem] h-[3.3125rem]
             bg-yellow mx-auto mt-8 cursor-pointer hover:border-2 font-bold text-white
              hover:border-yellow hover:text-yellow hover:bg-transparent"
            >
              <p>Get scootin</p>
            </div>

            <div className="absolute left-0 bottom-10 md:hidden">
              <Image src={sm_right_arrow} alt="/" />
            </div>

            <div className="hidden md:block lg:hidden absolute left-0 bottom-10">
              <Image src={md_right_arrow} alt="/" />
            </div>

            <div className="min-w-fit lg:min-w-full hidden md:block absolute right-0 lg:left-[77.3rem] bottom-10 lg:bottom-44">
              <Image src={header_white_circles} alt="/" />
            </div>

            <div className="min-w-fit lg:min-w-full hidden lg:block absolute bottom-44 left-[42rem]">
              <Image src={lg_right_arrow} alt="/" />
            </div>

            <div className="hidden lg:block absolute bottom-[19.5rem] left-0">
              <Image src={arrow_line} alt="/" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative max-w-[19.4375rem] md:max-w-[36rem] min-h-[44.25rem] 
       md:min-h-[36rem] lg:min-h-[17.125rem]  mx-auto grid grid-cols-1 grid-rows-3  
       gap-y-12 mt-28 lg:grid-cols-3 lg:grid-rows-1 lg:max-w-[79.6875rem]"
      >
        <div
          className="absolute w-full left-0 top-0 grid lg:grid-cols-3 lg:grid-rows-1
        gap-x-10"
        >
          <div className="w-full">
            <div className="w-fit mx-auto md:hidden">
              <Image src={locate_with_app} alt="/" />
            </div>

            <div className="hidden md:inline-block mr-20">
              <Image src={md_locate_with_app} alt="/" />
            </div>

            <div className="md:inline-block md:max-w-[24.875rem]">
              <p
                className="text-center font-bold text-[1.25rem]
           leading-[1.75rem] text-darkNavy mt-6 md:text-left"
              >
                Locate with app
              </p>

              <p
                className="font-lexend font-light text-base text-center text-dimGrey
          mt-6 md:text-left"
              >
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.{" "}
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-fit mx-auto md:hidden">
              <Image src={pick_your_scooter} alt="/" />
            </div>

            <div className="hidden md:inline-block mr-20">
              <Image src={md_pick_your_scooter} alt="/" />
            </div>

            <div className="md:inline-block md:max-w-[24.875rem]">
              <p
                className="text-center font-bold text-[1.25rem]
           leading-[1.75rem] text-darkNavy mt-6 md:text-left"
              >
                Pick your scooter
              </p>

              <p
                className="font-lexend font-light text-base text-center text-dimGrey
          mt-6 md:text-left"
              >
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.{" "}
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-fit mx-auto md:hidden">
              <Image src={enjoy_the_ride} alt="/" />
            </div>

            <div className="hidden md:inline-block mr-20">
              <Image src={md_enjoy_the_ride} alt="/" />
            </div>

            <div className="md:inline-block md:max-w-[24.875rem]">
              <p
                className="text-center font-bold text-[1.25rem]
           leading-[1.75rem] text-darkNavy mt-6 md:text-left"
              >
                Enjoy the ride
              </p>

              <p
                className="font-lexend font-light text-base text-center text-dimGrey
          mt-6 md:text-left"
              >
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute -top-28 left-10 z-[-1] lg:hidden">
          <Image src={tablet_vertical_line} alt="/" />
        </div>

        <div className="hidden lg:block absolute -left-20 top-10 z-[-1] ">
          <Image src={horizontal_line} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
