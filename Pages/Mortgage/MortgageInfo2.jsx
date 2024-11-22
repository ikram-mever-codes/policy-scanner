import Image from "next/image";
import React from "react";
import criticalInfo2 from "../../assets/critical-info-2.png";

const MortgageInfo2 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[1rem] py-[60px] pb-0 flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center text-halfBlack items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          How does mortgage life insurance work?{" "}
        </h2>
        <p className="text-dg text-halfBlack">
          Mortgage protection insurance,is a specific type of term insurance
          designed to match your mortgage amount and term. If the policyholder
          passes away during the term, the insurance company provides a payout
          to the beneficiaries, which can be used to pay off the remaining
          mortgage balance or any other outstanding debts.
        </p>
        <div className="w-full flex justify-between items-center   gap-[2rem]  flex-row-reverse">
          <Image
            src={criticalInfo2}
            alt="What is whole life Insurance in Canada"
            width={524}
            height={261}
            className="h-max object-cover object-center"
            loading="lazy"
            priority={false}
          />
          <ul className="custom-list-bullets flex flex-col gap-[30px] text-[16px]">
            <h5 className="font-medium text-[20px]">
              Main benefits of choosing mortgage life insurance
            </h5>

            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h3 className="font-semibold text-[17px] ">
                  Disability protection{" "}
                </h3>
                <p className="text-dg text-halfBlack">
                  Mortgage protection life insurance is independent. This means
                  your coverage remains intact even if you decide to switch
                  mortgage lenders.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h3 className="font-semibold text-[17px] ">
                  Guaranteed payout:{" "}
                </h3>
                <p className="text-dg text-halfBlack">
                  Mortgage protection insurance undergoes thorough underwriting
                  at the time the policy is issued, adding more security to the
                  payout during a claim.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MortgageInfo2;
