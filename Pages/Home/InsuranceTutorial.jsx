import { ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import tutImg from "../../assets/tutorial-img.png";
import Tut1 from "../../assets/tut1.svg";
import Tut2 from "../../assets/tut2.svg";
import Tut3 from "../../assets/tut3.svg";
const InsuranceTutorial = () => {
  return (
    <section className="px-[80px] py-[40px] w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%] h-full flex justify-start items-center flex-col gap-[20px]">
        <div className="px-[25px] py-[15px] flex-col flex justify-start gap-[15px] items-center w-[15rem] h-[10rem] border border-solid border-opposite rounded-lg">
          <Tut1 width="40px" height="40px" />
          <h4 className="text-[16px] font-semibold  text-center">
            Fill out our quick form
          </h4>
          <div className="text-center text-[14px]">
            It takes less than 2 minutes
          </div>
        </div>
        <div className="px-[25px] py-[15px] flex-col flex justify-start gap-[15px] items-center w-[15rem] h-[10rem] border border-solid border-opposite rounded-lg">
          <Tut2 width="40px" height="40px" />
          <h4 className="text-[16px] font-semibold  text-center">
            Fill out our quick form
          </h4>
          <div className="text-center text-[14px]">
            It takes less than 2 minutes
          </div>
        </div>{" "}
        <div className="px-[25px] py-[15px] flex-col flex justify-start gap-[15px] items-center w-[15rem] h-[10rem] border border-solid border-opposite rounded-lg">
          <Tut3 width="40px" height="40px" />
          <h4 className="text-[16px] font-semibold  text-center">
            Fill out our quick form
          </h4>
          <div className="text-center text-[14px]">
            It takes less than 2 minutes
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center  gap-[40px] items-start flex-col">
        <div className="w-full h-max flex justify-start items-center gap-[10px] flex-col">
          <h2 className="w-full font-bold text-[22px] text-left text-black">
            How Does it work?
          </h2>
          <div className="text-left text-[15px] w-full">
            The advisors will do a quick needs analysis and send a custom quote
          </div>
        </div>
        <Image
          src={tutImg}
          alt="Insurance Steps"
          height={400}
          width={400}
          objectFit="cover"
          objectPosition="center"
        />
        <div className="w-full flex justify-start items-start gap-[15px]">
          <button className="w-max h-[2.8rem] flex justify-center items-center bg-white border border-solid border-opposite text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
            Learn More
          </button>
          <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
            Get a Quote
            <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTutorial;
