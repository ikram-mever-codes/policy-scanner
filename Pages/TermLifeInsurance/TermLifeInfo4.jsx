import Image from "next/image";
import termAsset2 from "../../assets/term-asset-2.png";
import React from "react";

const TermLifeInfo4 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <div className="w-full h-[380px] flex justify-between items-center gap-[1rem]">
          <div className="w-full h-full flex justify-start items-start flex-col gap-[1rem]">
            <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
              How much does term life insurance cost?
            </h2>
            <p className="text-halfBlack">
              Lets examine how premium calculation works.
            </p>
            <ul className="custom-list-bullets w-full h-full flex justify-around  flex-col">
              <li>
                <div className="flex justify-start items-start flex-col gap-[10px]">
                  <h4 className="font-semibold text-halfBlack">
                    Premium calculation
                  </h4>
                  <p className="text-halfBlack">
                    The insurance premium is calculated based on age, health,
                    lifestyle, and the amount of coverage. It is determined
                    through an underwriting process.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-start flex-col gap-[10px]">
                  <h4 className="font-semibold text-halfBlack">
                    Example costs:{" "}
                  </h4>
                  <p className="text-halfBlack">
                    Premiums can range from $20 to $50 per month for a healthy
                    individual in their 30s for $500,000 coverage. These example
                    costs can help you understand what to expect in terms of
                    affordability.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src={termAsset2}
            height={370}
            width={412}
            alt=" How much does term life insurance cost?"
          />
        </div>
      </div>
    </section>
  );
};

export default TermLifeInfo4;
