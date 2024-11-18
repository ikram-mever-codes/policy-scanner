import React from "react";
import termLife4 from "../../assets/term-life-3.png";
import Image from "next/image";
const TermLifeInofo2 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How Does Term Life Insurance Work in Canada?{" "}
        </h2>
        <p>
          Term life insurance is a simple and straightforward way to ensure your
          loved ones are financially protected if you pass away. Before choosing
          a policy, there are three key steps you should review
        </p>
        <div className="w-full h-max flex justify-start items-start  p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
          <h3 className="font-semibold text-left">Coverage duration: </h3>
          <p className="text-[15px] text-left">
            This is a crucial step. Don't base the insurance term length solely
            on your current needs; always consider your future requirements. As
            you get older, premiums will be higher, so it's wise to lock in your
            rates for a longer term while you are young.
          </p>
        </div>
        <div className="w-full h-[350px] flex justify-between items-start gap-[2rem] ">
          <div className="w-full h-full flex justify-center items-center flex-col gap-[2rem]">
            <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
              <h3 className="font-semibold text-left">Premium payments: </h3>
              <p className="text-[15px] text-left">
                It is the cost of maintaining your term insurance in Canada. The
                insurance company calculates these premiums based on statistical
                models for the entire coverage period and divides them into
                annual or monthly payments
              </p>
            </div>
            <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
              <h3 className="font-semibold text-left">
                Choose a beneficiary:{" "}
              </h3>
              <p className="text-[15px] text-left">
                A beneficiary is the assigned person who will receive the death
                benefit. Beneficiaries can be irrevocable (cannot be changed
                once designated) or revocable (can be changed by the policy
                owner).
              </p>
            </div>
          </div>
          <Image
            src={termLife4}
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
      </div>
    </section>
  );
};
export default TermLifeInofo2;
