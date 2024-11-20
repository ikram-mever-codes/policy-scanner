import Image from "next/image";
import React from "react";
import termLife2 from "../../assets/term-life-2.png";
const TermLifeInfo = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1000px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          What is term life insurance in Canada?{" "}
        </h2>
        <p>
          Term life insurance in Canada provides coverage for a specific period,
          typically ranging from Term 10 to Term 30, or up to a certain age.
          Term life insurance quotes are often more affordable than whole life
          insurance. Additionally, the premiums are fixed, and if the insured
          passes away during the term, the beneficiaries will receive a tax-free
          lump sum payment, offering financial security. Comparing term life
          insurance quotes in Canada is a great way to find the best term
          insurance for your needs at competitive rates.
        </p>
        <div className="w-full flex justify-between items-center gap-[2rem] mt-[10px]">
          <Image
            src={termLife2}
            alt="What is whole life Insurance in Canada"
            objectFit="cover"
            width={400}
            height={500}
            className="h-max"
            objectPosition="center"
            loading="lazy"
            priority={false}
          />
          <div className="w-full h-full flex justify-start items-center flex-col gap-[1rem]">
            <h3 className="font-semibold text-[18px] text-left">
              The cost of term life insurance in Canada depends on two primary
              factors:
            </h3>
            <ul className="custom-list-bullets flex flex-col gap-[40px] text-[16px]">
              <li className="w-full flex justify-start items-start">
                Age: The younger you are when purchasing the policy, the lower
                your term life insurance quotes will be.
              </li>
              <li className="w-full flex justify-start items-start">
                Coverage Term: The longer the coverage term, the higher the
                monthly premiums. This is because the premiums are fixed for the
                longer contracted years.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermLifeInfo;
