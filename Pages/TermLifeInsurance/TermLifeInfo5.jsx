import React from "react";
import termLife3 from "../../assets/term-asset-3.png";
import Image from "next/image";
import { ArrowForwardIos } from "@mui/icons-material";
const TermLifeInfo5 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] p-[5rem] pb-[2rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What happens after your term life insurance ends?
        </h2>{" "}
        <p className="text-[18px] text-halfBlack w-full text-left mb-[2rem] line-h">
          Depending on the type of your term insurance policy, you may have four
          choices before the end of the contract period.
        </p>
        <div className="w-full h-[550px] flex justify-between items-center ">
          <div className="flex-col w-full h-full flex justify-center items-start gap-[2rem]">
            <div className=" w-[568px] h-[169px] flex justify-center items-center flex-col gap-[1rem] py-4 px-6 rounded-2xl border border-solid border-opposite">
              <h3 className="font-semibold text-[20px] w-full text-left text-halfBlack">
                Convert your coverage
              </h3>
              <p className="w-full text-left text-halfBlack">
                If you have opted for a convertible term insurance, you can turn
                your current term life insurance policy into a permanent life
                insurance policy either fully or partially.
              </p>
            </div>
            <div className=" w-[568px] h-[169px] flex justify-center items-center flex-col gap-[1rem] py-4 px-6 rounded-2xl border border-solid border-opposite">
              <h3 className="font-semibold text-[20px] w-full text-left text-halfBlack">
                Let your coverage lapse{" "}
              </h3>
              <p className="w-full text-left text-halfBlack">
                This option is suitable for those who feel they no longer
                require the financial protection that a term life insurance
                policy provides.
              </p>
            </div>{" "}
            <div className=" w-[568px] h-[169px] flex justify-center items-center flex-col gap-[1rem] py-4 px-6 rounded-2xl border border-solid border-opposite">
              <h3 className="font-semibold text-[20px] w-full text-left text-halfBlack">
                Renew your coverage{" "}
              </h3>
              <p className="w-full text-left text-halfBlack">
                You can renew your renewable term life insurance with your
                current provider without a medical exam or medical questions.
                However, the premium will be higher.
              </p>
            </div>
          </div>
          <Image
            src={termLife3}
            alt="
          What happens after your term life insurance ends?
          "
            width={500}
            height={540}
            className="object-cover object-center"
          />
        </div>
        <div className="w-full flex justify-center items-center gap-[3rem] mt-[4rem]">
          <div>
            <h4 className="text-[35px] font-bold text-primary text-left">
              Save Time, Save Money{" "}
            </h4>
            <p className="text-left mt-[10px] text-[18px]">
              Compare Term Insurance Quotes Instantly.{" "}
            </p>
          </div>
          <div className="whole-life-divider"></div>
          <div>
            <button className="w-[272px] h-[58px] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
              Get Instant Quotes
              <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermLifeInfo5;
