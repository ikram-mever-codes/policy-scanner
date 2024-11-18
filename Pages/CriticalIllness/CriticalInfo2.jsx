import Image from "next/image";
import React from "react";
import criticalInfo2 from "../../assets/critical-info-2.png";
const CriticalInfo2 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[1rem] py-[3rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How does critical illness insurance work in Canada?{" "}
        </h2>

        <div className="w-full flex justify-between items-center gap-[2rem]  flex-row-reverse">
          <Image
            src={criticalInfo2}
            alt="What is whole life Insurance in Canada"
            width={400}
            height={500}
            className="h-max object-cover object-center"
            loading="lazy"
            priority={false}
          />
          <ul className="custom-list-bullets flex flex-col gap-[40px] text-[16px]">
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p>
                  In Canada, while hospital visits are covered by the
                  government, the cost of treatment and lost income can still be
                  overwhelming.C.I provides a tax-free lump sum payout during
                  this vulnerable time.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p>
                  Usually there is a 30-day waiting period. This is the number
                  of days you need to survive following the diagnosis of a
                  covered critical illness before the benefit is payable.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p>
                  C.I can be purchased as a standalone policy or added as a
                  rider to an existing life insurance policy. It is often
                  referred to as cancer insurance, heart attack insurance, or
                  stroke insurance, depending on the illnesses covered.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CriticalInfo2;
