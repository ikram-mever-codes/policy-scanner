import React from "react";
import homeExtra3 from "../../assets/home-extra-3.png";
import homeExtra4 from "../../assets/home-extra-4.png";
import homeExtra5 from "../../assets/home-extra-5.png";
import Image from "next/image";

const QuoteProcess = () => {
  return (
    <section className="w-full h-max bg-white sm:px-[80px] px-[20px] mt-[120px] mb-[100px] gap-[2.5rem] flex justify-start items-center flex-col">
      <div className="w-[800px] overflow-hidden flex justify-start items-center flex-col gap-[4rem]">
        <h2 className="text-halfBlack text-[40px] font-semibold text-center ">
          Get Custom Quotes in Less Than 3 Minutes{" "}
        </h2>
        <div className="flex justify-start items-center   w-full flex-col gap-[80px]">
          <div
            className="w-full h-max  gap-[80px] items-center"
            style={{ display: "grid", gridTemplateColumns: "auto  60%" }}
          >
            <Image
              src={homeExtra3}
              alt="Explore Top Providers in One Place"
              width={299}
              height={297}
            />
            <div className="w-full flex justify-start items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Explore Top Providers in <br /> One Place{" "}
              </h3>
              <p className="text-dg text-left ">
                Compare quotes from Canada’s leading insurance providers—all in
                one easy-to-use marketplace.
              </p>
            </div>
          </div>
          <div
            className="w-full h-max  gap-[80px] items-center"
            style={{ display: "grid", gridTemplateColumns: "auto  60%" }}
          >
            <Image
              src={homeExtra4}
              alt="Explore Top Providers in One Place"
              width={259}
              height={190}
            />
            <div className="w-full flex justify-start items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Find the Best Policy <br /> and Save More{" "}
              </h3>
              <p className="text-dg text-left ">
                Discover Affordable Coverage Tailored to You—Compare Now and
                Save for Years to come!
              </p>
            </div>
          </div>{" "}
          <div
            className="w-full h-max  gap-[80px] items-center"
            style={{ display: "grid", gridTemplateColumns: "auto  60%" }}
          >
            <Image
              src={homeExtra5}
              alt="Explore Top Providers in One Place"
              width={172}
              height={256}
            />
            <div className="w-full flex justify-start items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Personalized Support, <br /> Every Step of the Way{" "}
              </h3>
              <p className="text-dg text-left ">
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
