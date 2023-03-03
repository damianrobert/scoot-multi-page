import Image from "next/image";
import { SetStateAction, useState } from "react";
import drop_down from "../../assets/images/question-drop-down.svg";
import close_up from "../../assets/images/question-close-up.svg";

function Faqs() {
  const [howItWorksOpen, setHowItWorksOpen] = useState(Number);
  const [safeDrivingOpen, setSafeDrivingOpen] = useState(Number);

  const handleSafeDrivingOpen = (index: SetStateAction<number>) => {
    if (index === safeDrivingOpen) {
      return setSafeDrivingOpen(index - index - 1); //exit index bounds to close question
    }
    setSafeDrivingOpen(index);
  };

  const handleHowItWorksOpen = (index: SetStateAction<number>) => {
    if (index === howItWorksOpen) {
      return setHowItWorksOpen(index - index - 1); //exit index bounds to close question
    }
    setHowItWorksOpen(index);
  };

  const toggleHowItWorksIcons = (index: SetStateAction<number>) => {
    if (index === howItWorksOpen) {
      return <Image src={close_up} alt="/" />;
    } else {
      return <Image src={drop_down} alt="/" />;
    }
  };

  const toggleSafeDrivingIcons = (index: SetStateAction<number>) => {
    if (index === safeDrivingOpen) {
      return <Image src={close_up} alt="/" />;
    } else {
      return <Image src={drop_down} alt="/" />;
    }
  };

  return (
    <div className="w-[19.4375rem] md:w-full mx-auto my-16">
      <div>
        <h1 className="font-bold text-5xl leading-[3rem] text-center text-darkNavy">
          FAQs
        </h1>
      </div>

      <div className="mt-10 lg:flex justify-around lg:max-w-[93.75rem] mx-auto">
        <div>
          <h2 className="text-[2.5rem] leading-[3rem] font-bold text-center text-darkNavy">
            How it works
          </h2>
        </div>

        <div className="lg:flex flex-col">
          {howItWorks.map((item, index) => {
            return (
              <div className="md:w-[43.0625rem] lg:max-w-[45.625rem] mx-auto bg-snow py-8 px-10 mt-6">
                <div className="flex  justify-between items-center">
                  <p
                    className="font-bold text-2xl leading-7 text-darkNavy"
                    key={index}
                  >
                    {item.question}
                  </p>

                  <div
                    className="w-fit cursor-pointer"
                    onClick={() => handleHowItWorksOpen(index)}
                  >
                    {toggleHowItWorksIcons(index)}
                  </div>
                </div>

                <div className="mt-6">
                  <p
                    className={
                      index === howItWorksOpen ? "text-darkNavy" : "hidden"
                    }
                    key={index}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 lg:flex justify-around lg:max-w-[93.75rem] mx-auto">
        <h1 className="font-bold text-[2.5rem] leading-[3rem] text-darkNavy text-center">
          Safe driving
        </h1>
        <div className="lg:flex flex-col">
          {safeDriving.map((item, index) => {
            return (
              <div className="md:w-[43.0625rem] mx-auto bg-snow py-8 px-10 mt-6">
                <div className="flex justify-between items-center">
                  <p
                    className="font-bold text-2xl leading-7 text-darkNavy"
                    key={index}
                  >
                    {item.question}
                  </p>

                  <div
                    className="w-fit cursor-pointer"
                    onClick={() => handleSafeDrivingOpen(index)}
                  >
                    {toggleSafeDrivingIcons(index)}
                  </div>
                </div>

                <div className="mt-6">
                  <p
                    className={
                      index === safeDrivingOpen ? "text-darkNavy" : "hidden"
                    }
                    key={index}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const howItWorks = [
  {
    question: "How do I download the app?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },

  {
    question: "Can I find a nearby Scoots?",
    answer:
      "The app has a list of nearby Scoots. You can find them by clicking on search",
  },

  {
    question: "Do I need a license to ride?",
    answer: "You’ll need a license to ride the Scoot app.",
  },
];

const safeDriving = [
  {
    question: "Should i wear a helmet?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },

  {
    question: "How about the rules & regulations?",
    answer:
      "The rules and regulations are important to us. We’re here to help you stay safe.",
  },

  {
    question: "What if I damage my Scoot?",
    answer:
      "If you damaged your Scoot, you’ll need to contact us. We’re here to help you",
  },
];

export default Faqs;
