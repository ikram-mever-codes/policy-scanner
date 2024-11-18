import React from "react";
import wholeLife4 from "../../assets/whole-life-4.png";
import Image from "next/image";
const WholeLifeInofo2 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How Does whole Life insurance Work in Canada?
        </h2>
        <p>
          When you buy a whole life insurance policy in Canada, the premium you
          pay is divided into two components: life coverage and cash value
          accumulation. These premiums are calculated based on factors such as
          your age, gender, lifestyle, and smoking status.{" "}
        </p>
        <div className="w-full h-max flex justify-between items-start gap-[2rem] ">
          <div className="w-full h-max flex justify-between items-center flex-col gap-[2rem] p-[1rem]">
            <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
              <h3 className="font-semibold text-left">
                Cost of pure life insurance:
              </h3>
              <p className="text-[15px] text-left">
                Every whole life insurance policy includes life coverage cost to
                provide a guaranteed death benefit to its beneficiaries.
              </p>
            </div>
            <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
              <h3 className="font-semibold text-left">
                Policy administration cost{" "}
              </h3>
              <p className="text-[15px] text-left">
                This is a part of your overall whole life insurance premiums.
                These fees ensure that the policy is managed efficiently.
              </p>
            </div>
            <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
              <h3 className="font-semibold text-left">Cash value component </h3>
              <p className="text-[15px] text-left">
                The remaining premium is invested in stable, low-risk assets,
                generating a cash value that grows over time. The cash value can
                be withdrawn as a loan by the insured.
              </p>
            </div>
          </div>
          <Image
            src={wholeLife4}
            alt="What is whole life Insurance in Canada"
            objectFit="cover"
            width={350}
            height={350}
            className="h-max p-[10px]"
            objectPosition="center"
            loading="lazy"
            priority={false}
          />{" "}
        </div>
        <p>
          Additionally, whole life insurance policies may pay dividends and
          offer tax benefits to policyholders. These dividends can be used to
          reduce premiums, purchase additional coverage, or be taken as cash.
          However, keep in mind that dividends are not guaranteed. Therefore,
          it's important to choose a company with a history of consistent
          dividend payments.
        </p>
      </div>
    </section>
  );
};
export default WholeLifeInofo2;
