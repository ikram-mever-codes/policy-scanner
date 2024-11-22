import Image from "next/image";
import React from "react";
import WholeLife3 from "../../assets/whole-life-3.png";
const MortgageInfo = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[0px] py-[60px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex text-halfBlack justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What is Mortgage Protection Insurance?{" "}
        </h2>
        <p className="text-dg text-halfBlack">
          Mortgage protection insurance (also known as mortgage life insurance)
          is designed to protect your mortgage in the event of your death.
          Typically, banks offer creditor mortgage insurance, which covers the
          outstanding mortgage balance. However, through PolicyScanner, you can
          find similar protection with term life insurance.
        </p>
        <div className="w-full flex justify-between items-start gap-[2rem] mt-[2rem]">
          <Image
            src={WholeLife3}
            alt="What is whole life Insurance in Canada"
            objectFit="cover"
            width={513}
            height={361}
            className="h-max"
            objectPosition="center"
            loading="lazy"
            priority={false}
          />
          <ul className="custom-list-bullets flex flex-col gap-[20px] text-[16px]">
            <h5 className="font-medium text-[20px]">Key points:</h5>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[5px]">
                <h3 className="font-semibold text-[17px] ">
                  Flexible and transferable:
                </h3>
                <p className="text-dg text-halfBlack">
                  Unlike creditor insurance, mortgage protection insurance stays
                  with you even if you switch lenders or pay off part of your
                  mortgage.
                </p>
              </div>
            </li>
            <h5 className="font-medium text-[20px]">Add ons:</h5>

            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[5px]">
                <h3 className="font-semibold text-[17px] ">
                  Disability protection{" "}
                </h3>
                <p className="text-dg text-halfBlack">
                  Provide payments if the insured becomes disabled and is unable
                  to work.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[5px]">
                <h3 className="font-semibold text-[17px] ">
                  Critical illness coverage{" "}
                </h3>
                <p className="text-dg text-halfBlack">
                  Covers mortgage payments if the insured is diagnosed with a
                  critical illness.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MortgageInfo;
