import React from "react";
import homeExtra3 from "../../assets/home-extra-3.png";
import homeExtra4 from "../../assets/home-extra-4.png";
import homeExtra5 from "../../assets/home-extra-5.png";
import Image from "next/image";

const QuoteProcess = () => {
  return (
    <section className="w-full h-max bg-white sm:px-[80px] px-[20px] py-[5rem] gap-[2.5rem] flex justify-start items-center flex-col">
      <div className="w-full sm:w-[75%] flex justify-start items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[25px] sm:text-[30px] text-center text-halfBlack">
          Get Custom Quotes in Less Than 3 Minutes{" "}
        </h2>
        <div className="flex justify-start items-center gap-[2rem] w-max h-max flex-col ">
          <div className="w-full h-max flex justify-between items-center">
            <div className="w-max sm:w-full flex justify-center  items-center">
              <Image
                src={homeExtra3}
                alt="Explore Top Providers in One Place"
                className="w-[60px] sm:w-[100px]"
              />
            </div>
            <div className="w-full flex justify-start items-center flex-col sm:px-[25px] gap-4">
              <h3 className="text-[22px] w-full sm:spr-[7rem] text-left font-semibold">
                Explore Top Providers in One Place{" "}
              </h3>
              <p className="text-[14px] pr-[3rem] w-full text-left">
                Compare quotes from Canada’s leading insurance providers—all in
                one easy-to-use marketplace.
              </p>
            </div>
          </div>
          <div className="w-full h-max flex justify-between items-center">
            <div className="w-max sm:w-full flex justify-center  items-center">
              <Image
                src={homeExtra4}
                alt="Explore Top Providers in One Place"
                className="w-[60px] sm:w-[100px]"
              />
            </div>
            <div className="w-full flex justify-start items-center flex-col px-[25px] gap-4">
              <h3 className="text-[22px] w-full pr-[7rem] text-left font-semibold">
                Find the Best Policy and Save More{" "}
              </h3>
              <p className="text-[14px] pr-[3rem] w-full text-left">
                Discover Affordable Coverage Tailored to You—Compare Now and
                Save for Years to come!
              </p>
            </div>
          </div>{" "}
          <div className="w-full h-max flex justify-between items-center">
            <div className="w-max sm:w-full flex justify-center  items-center">
              <Image
                src={homeExtra5}
                alt="Explore Top Providers in One Place"
                className="w-[80px] sm:w-[150px]"
              />
            </div>
            <div className="w-full flex justify-start items-center flex-col px-[25px] gap-4">
              <h3 className="text-[22px] w-full pr-[7rem] text-left font-semibold">
                Personalized Support, Every Step of the Way{" "}
              </h3>
              <p className="text-[14px] pr-[3rem] w-full text-left">
                Our Dedicated Advisors Are Here to Guide You Through Every Step
                and Every Decision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteProcess;
