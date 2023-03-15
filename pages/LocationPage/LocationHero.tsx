import Image from "next/image";
import sm_world_map from "../../assets/images/sm-world-map.svg";
import md_world_map from "../../assets/images/md-world-map.svg";
import lg_world_map from "../../assets/images/lg-world-map.svg";
import md_pin_location from "../../assets/images/md-pin-location.svg";
import lg_pin_location from "../../assets/images/lg-pin-location.svg";

const LocationHero = () => {
  return (
    <div className="mt-20">
      <div
        className="w-[19.4375rem] md:w-[43.0625rem] lg:w-[69.375rem] mx-auto relative 
      my-6"
      >
        <div
          className="md:hidden bg-[#ffffffdb] w-full h-full absolute 
        top-0 left-0 overflow-hidden"
        ></div>

        <div
          className="hidden md:block lg:hidden bg-[#ffffffdb] w-full h-full absolute 
        top-0 left-0 overflow-hidden"
        ></div>

        <div
          className="hidden lg:block bg-[#ffffffea] w-full h-full absolute 
        top-0 left-0 overflow-hidden"
        ></div>
        <div className="w-fit md:hidden">
          <Image src={sm_world_map} alt="/" />
        </div>

        <div className="hidden md:block w-fit lg:hidden">
          <Image src={md_world_map} alt="/" />
        </div>

        <div className="hidden lg:block w-fit">
          <Image src={lg_world_map} alt="/" />
        </div>

        <div className="md:hidden">
          <div
            className="w-4 h-4 rounded-[50%] bg-yellow absolute left-[4.5rem]
        top-8 z-[1] "
          ></div>

          <div
            className="w-4 h-4 rounded-[50%] bg-yellow absolute left-[8rem]
        top-6 z-[1] "
          ></div>

          <div
            className="w-4 h-4 rounded-[50%] bg-yellow absolute right-10
        top-10 z-[1] "
          ></div>

          <div
            className="w-4 h-4 rounded-[50%] bg-yellow absolute right-16
        top-20 z-[1] "
          ></div>
        </div>

        <div className="hidden md:block">
          <div className="absolute left-[5.5rem] top-14 lg:left-[11rem]">
            <div className="w-fit relative">
              <div className="lg:hidden">
                <Image src={md_pin_location} alt="/" />
              </div>

              <div className="hidden lg:block">
                <Image src={lg_pin_location} alt="/" />
              </div>
              <div className="absolute w-full top-0 left-0">
                <p
                  className="text-center py-1 font-bold text-darkNavy 
                lg:text-2xl lg:py-4"
                >
                  New York
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[15rem] top-6 lg:left-[24rem] lg:top-4">
            <div className="w-fit relative">
              <div className="lg:hidden">
                <Image src={md_pin_location} alt="/" />
              </div>

              <div className="hidden lg:block">
                <Image src={lg_pin_location} alt="/" />
              </div>
              <div className="absolute w-full top-0 left-0">
                <p
                  className="text-center py-1 font-bold text-darkNavy 
                lg:text-2xl lg:py-4"
                >
                  London
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-16 lg:right-16 lg:top-20">
            <div className="w-fit relative">
              <div className="lg:hidden">
                <Image src={md_pin_location} alt="/" />
              </div>

              <div className="hidden lg:block">
                <Image src={lg_pin_location} alt="/" />
              </div>
              <div className="absolute w-full top-0 left-0">
                <p
                  className="text-center py-1 font-bold text-darkNavy 
                lg:text-2xl lg:py-4"
                >
                  Yokohama
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute right-20 bottom-[7.7rem] lg:bottom-[12.5rem]
          lg:right-[8.5rem]"
          >
            <div className="w-fit relative">
              <div className="lg:hidden">
                <Image src={md_pin_location} alt="/" />
              </div>

              <div className="hidden lg:block">
                <Image src={lg_pin_location} alt="/" />
              </div>
              <div className="absolute w-full top-0 left-0">
                <p
                  className="text-center py-1 font-bold text-darkNavy 
                lg:text-2xl lg:py-4"
                >
                  Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[19.4375rem] mx-auto md:hidden">
        <div className="h-20 bg-[#fcb62b44] py-6 mb-6">
          <p className="font-bold text-darkNavy text-2xl text-center">
            New York
          </p>
        </div>

        <div className="h-20 bg-[#fcb62b44] py-6 mb-6">
          <p className="font-bold text-darkNavy text-2xl text-center">London</p>
        </div>

        <div className="h-20 bg-[#fcb62b44] py-6 mb-6">
          <p className="font-bold text-darkNavy text-2xl text-center">
            Jakarta
          </p>
        </div>

        <div className="h-20 bg-[#fcb62b44] py-6 mb-6">
          <p className="font-bold text-darkNavy text-2xl text-center">
            Yokohama
          </p>
        </div>
      </div>

      <div
        className="max-w-[19.4375rem] md:max-w-[35.8125rem] mx-auto my-12 
      lg:max-w-[69.4375rem] lg:flex lg:justify-center"
      >
        <h2
          className="text-[2rem] md:text-[3rem] leading-8 md:leading-[3rem] font-bold text-darkNavy 
        text-center lg:text-left lg:max-w-[21.9375rem]"
        >
          Your city not listed?
        </h2>

        <p
          className="font-lexend text-dimGrey font-light text-center mt-6 
        lg:text-left lg:max-w-[27.8125rem]"
        >
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>

        <div
          className="w-[15.4375rem] mx-auto h-14 flex items-center justify-center 
              text-white font-bold cursor-pointer bg-yellow hover:border-2 border-yellow
              hover:bg-transparent hover:text-yellow mt-6"
        >
          <p>Message us</p>
        </div>
      </div>
    </div>
  );
};

export default LocationHero;
