import Image from "next/image";
import React from "react";
import criticalInfo2 from "../../assets/critical-info-2.png";

const MortgageInfo3 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[1rem] py-[3rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center text-halfBlack items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          Types of Mortgage Protection Insurance
        </h2>
        <p className="w-full text-left">
          Mortgage insurance and related products go by several different names
          in Canada. Here's how to differentiate between each type:
        </p>
        <div className="w-full flex justify-start items-start flex-col gap-[2rem]">
          <div className="w-full h-max p-4 flex gap-2 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
            <h4 className="font-semibold text-[17px]">Mortgage insurance</h4>
            <p>
              Offered by banks, lender-provided mortgage insurance is designed
              to cover only the outstanding mortgage balance. This ensures the
              mortgage is paid off and protects the lender, but your loved ones
              have no control over the payout.
            </p>
          </div>
          <div className="w-full h-max p-4 flex gap-2 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
            <h4 className="font-semibold text-[17px]">
              Mortgage default insurance (CMHC insurance):
            </h4>
            <p>
              Mortgage default insurance, commonly referred to as CMHC
              insurance, is mandatory if the down payment is less than 20%. It
              does not cover your mortgage in the event of death or disability.
            </p>
          </div>{" "}
          <div className="w-full h-max p-4 flex gap-2 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
            <h4 className="font-semibold text-[17px]">
              Mortgage protection insurance:
            </h4>
            <p>
              Mortgage protection insurance is a type of term life insurance
              that matches your mortgage amount and term. In the event of your
              death, the payout is made directly to your family, giving them
              control over the funds.
            </p>
          </div>
          <div className="w-full h-max p-4 flex gap-2 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
            <h4 className="font-semibold text-[17px]">
              Is mortgage life insurance worth it?
            </h4>
            <p>
              One of the main benefits of mortgage protection insurance quotes
              is its affordability. For instance, adding mortgage protection can
              cost only $30 to $40 CAD per month. Additionally, it’s often
              easier to qualify for mortgage protection insurance than
              traditional life insurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageInfo3;
