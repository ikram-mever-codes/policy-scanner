import Image from "next/image";
import React from "react";
import WholeLife3 from "../../assets/whole-life-3.png";
const CriticalInfo = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[0px] pb-[60px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What is critical illness insurance?{" "}
        </h2>
        <p className="text-dg text-left text-halfBlack">
          Critical illness insurance in Canada is a type of insurance policy
          designed to provide financial support if you are diagnosed with a
          serious illness covered by your plan.
        </p>
        <div className="w-full flex justify-between items-center gap-[2rem] mt-[1rem]">
          <Image
            src={WholeLife3}
            alt="What is whole life Insurance in Canada"
            objectFit="cover"
            width={400}
            height={500}
            className="h-max"
            objectPosition="center"
            loading="lazy"
            priority={false}
          />
          <ul className="custom-list-bullets flex flex-col gap-[40px] text-[16px]">
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p className="text-dg text-left text-halfBlack">
                  Upon diagnosis, you will receive a tax-free lump sum payment,
                  which is also known as a living benefit. This payment is
                  provided regardless of your recovery status, making it a
                  valuable resource during challenging times.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p className="text-dg text-left text-halfBlack">
                  Critical illness insurance in Canada typically covers serious
                  illnesses such as cancer, heart attack, and stroke, among
                  others. The specific conditions covered may vary depending on
                  your policy.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p className="text-dg text-left text-halfBlack">
                  C.I insurance in Canada is available in two forms: term and
                  permanent. Term critical illness insurance covers you for a
                  set period, while permanent critical illness insurance
                  provides coverage for your entire life.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CriticalInfo;
