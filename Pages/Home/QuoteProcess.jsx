import React from "react";
import homeExtra3 from "../../assets/home-extra-3.png";
import homeExtra4 from "../../assets/home-extra-4.png";
import homeExtra5 from "../../assets/home-extra-5.png";
import Image from "next/image";

const QuoteProcess = () => {
  return (
    <section className="w-full h-max bg-white sm:px-[80px] px-[20px] mt-[60px] mb-[60px] gap-[2.5rem] flex justify-start items-center flex-col">
      <div className="w-[1140px] overflow-hidden flex justify-start items-center flex-col gap-[50px]">
        <h2 className="text-halfBlack text-[40px] font-bold text-center ">
          Get custom quotes in less than 1 minute{" "}
        </h2>
        <div className="flex  w-[950px] justify-center items-center  overflow-hidden flex-col gap-[80px]">
          <div
            className="w-full h-max justify-center    items-center mx-auto"
            style={{ display: "grid", gridTemplateColumns: "50%  50%" }}
          >
            <div className="px-[5rem]">
              <Image
                src={homeExtra3}
                alt="Explore Top Providers in One Place"
                width={209}
                height={150}
              />
            </div>
            <div className="w-full px-[15px] flex justify-center items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Top insurance companies in one platform.{" "}
              </h3>
              <p className="text-dg text-left  ">
                Compare quotes from Canada’s leading insurance providers, all in
                one easy-to-use marketplace.
              </p>
            </div>
          </div>
          <div
            className="w-full h-max justify-center    items-center mx-auto"
            style={{ display: "grid", gridTemplateColumns: "50%  50%" }}
          >
            <div className="px-[5rem] relative left-[40px]">
              <Image
                src={homeExtra4}
                alt="Explore Top Providers in One Place"
                width={209}
                height={150}
              />
            </div>
            <div className="w-full px-[15px] flex justify-center items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Find the best life insurance and <br />
                save more.
              </h3>
              <p className="text-dg text-left  ">
                Discover affordable coverage tailored to you. Compare now and
                save for years to come.
              </p>
            </div>
          </div>
          <div
            className="w-full h-max justify-center    items-center mx-auto"
            style={{ display: "grid", gridTemplateColumns: "50%  50%" }}
          >
            <div className="px-[5rem]">
              <Image
                src={homeExtra5}
                alt="Explore Top Providers in One Place"
                width={209}
                height={150}
              />
            </div>
            <div className="w-full px-[15px] flex justify-center items-center flex-col gap-4">
              <h3 className="text-[28px] w-full  text-left font-[700] text-halfBlack">
                Personalized support, every step of the way.{" "}
              </h3>
              <p className="text-dg text-left  ">
                Our dedicated advisors are here to guide you through every step
                and every decision.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default QuoteProcess;
