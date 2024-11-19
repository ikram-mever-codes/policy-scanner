import React from "react";
import Image from "next/image";
import homextr1 from "../assets/home-extra-1.png";
import homextr2 from "../assets/home-extra-2.png";

const Stats = () => {
  return (
    <div className="w-[1000px] flex justify-center items-center  sm:bg-white mx-auto bg-foreground2 h-max my-[60px]">
      <div className="flex flex-wrap justify-center gap-[190px]  items-center  px-[20px] ">
        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[40px] sm:text-[30px] text-halfBlack">
            150+
          </div>
          <div className="text-[16px] underline">Expert reviewed articles</div>
        </div>

        <div className="flex justify-center items-center flex-col  ">
          <Image
            src={homextr1}
            alt="4.6 out of 5 Excellent rating"
            width={249}
            height={37}
            className="object-cover object-center  w-[249px] h-max"
          />
          <div className="text-[16px] underline">
            {" "}
            4.6 out of 5 Excellent rating
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="font-bold text-[20px] sm:text-[30px] text-halfBlack flex justify-center items-center gap-2">
            <Image
              src={homextr2}
              alt="4.6 out of 5 Excellent rating"
              className="object-cover object-center w-[37px] h-[40px]"
            />
            100%
          </div>
          <div className="text-[16px] underline">Canadian Company</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
