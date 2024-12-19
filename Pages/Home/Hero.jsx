import React from "react";
import home1 from "../../assets/home-asset-5.jpg";
import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, Home, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[650px] flex justify-center items-center w-full overflow-hidden bg-[#15A395]">
      {/* Abstract geometric shapes */}
      <div className="w-max">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-teal-200/20" />
          <div className="absolute top-[40%] right-[10%] w-48 h-48 rounded-full bg-teal-200/15" />
          <div className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full bg-teal-200/20" /> */}

          {/* Wave pattern */}
          {/* <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.1)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg> */}
        </div>

        {/* Content Grid */}
        <div className="h-full w-full">
          {/* Left Content */}
          <div className=" absolute   w-full h-full z-[1]">
            <div className="w-max h-full relative xl:left-[700px] top-[20px] flex justify-start py-[70px] gap-4 items-center flex-col">
              <div className="w-full h-max flex justify-end items-center flex-col">
                <h1 className="text-[50px] font-bold leading-[4rem] text-left text-white">
                  Let us do the comparison <br /> You enjoy the savings
                </h1>
                <p className="w-full text-white/90 text-[18px] text-left my-[10px]">
                  Compare Canada's best life Insurance rates instantly
                </p>
              </div>
              <div className="w-max self-start grid grid-cols-2   gap-x-8 gap-y-4 mt-6">
                {[
                  { name: "Term Life", icon: <Shield /> },
                  { name: "Whole Life", icon: <Star /> },
                  { name: "Critical Illness", icon: <Heart /> },
                  { name: "Mortgage Insurance", icon: <Home /> },
                ].map((item) => (
                  <Link
                    href="/quote-form"
                    key={item}
                    onClick={() => {
                      const insuranceTypes = {
                        "Term Life": "term-life",
                        "Whole Life": "whole-life",
                        "Critical Illness": "critical-illness",
                        "Mortgage Insurance": "mortgage-insurance",
                      };
                      localStorage.setItem("ins", insuranceTypes[item.name]);
                    }}
                  >
                    <div
                      className="relative group flex justify-center items-center w-[260px] h-[85px] 
                                shadow-2xl text-teal-600 rounded-2xl bg-white/95
                                transform transition-all duration-300 ease-in-out
                                hover:scale-105 hover:shadow-lg
                                cursor-pointer overflow-hidden "
                    >
                      <h3 className="relative text-center w-full flex justify-start px-[1.5rem] items-center gap-3 text-lg font-normal z-10">
                        {item.icon} {item.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <div className=" w-full">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-start space-x-6 text-white/90 text-sm">
                    <span>✓ Licensed Providers</span>
                    <span>✓ Instant Quotes</span>
                    <span>✓ Best Rate Guarantee</span>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Content - Image */}
          <div className="w-full h-full flex   justify-start items-end">
            <div className="relative z-[0]   w-max h-full">
              <Image
                src={home1}
                alt="Insurance Hero"
                className="object-cover object-center h-max w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
