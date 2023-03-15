import Link from "next/link";
import Image from "next/image";
import header_white_circles from "../../assets/images/header-white-circles.svg";

const LocationHeader = () => {
  return (
    <div>
      <div
        className="relative h-40 max-w-[90rem] mx-auto bg-mobileLocationHeader md:bg-locationHeader bg-cover
      md:h-[12.5rem] bg-no-repeat"
      >
        <div
          className="absolute left-0 top-0 w-full h-full overflow-hidden
        bg-[#2f3b59ac]"
        ></div>

        <div className="absolute left-0 top-0 w-full h-full">
          <div className="w-[19.4375rem] mx-auto pt-14 md:ml-10 md:mr-0">
            <h1
              className="text-center text-white text-[2.5rem] md:text-[3.5rem]
              font-bold"
            >
              Locations
            </h1>
          </div>

          <div className="hidden md:block absolute bottom-[2rem] right-0">
            <Image src={header_white_circles} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHeader;
