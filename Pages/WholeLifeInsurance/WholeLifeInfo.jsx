import Image from "next/image";
import React from "react";
import WholeLife3 from "../../assets/whole-life-3.png";
const WholeLifeInfo = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pb-[80px] pt-0  flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What is whole life Insurance in Canada?
        </h2>
        <p className="text-halfBlack text-dg">
          Whole life insurance in Canada is a type of permanent life insurance
          that guarantees a payout whenever you pass away, as it has no
          expiration date. Unlike term life insurance, which covers a specific
          period, whole life insurance provides lifelong protection.
          <br />
          <br />
          One of the key feature of whole life insurance is its fixed premiums
          throughout the contract period. In addition to providing life
          coverage, it also includes a cash value component. This cash value
          grows over time and can be used for various financial needs, like
          supplementing retirement income or funding your children’s education.
        </p>
        <div className="w-full flex justify-between items-center gap-[2rem] mt-[2rem]">
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
                <h3 className="font-semibold text-[18px]">
                  What are the benefits of permanent insurance coverage?
                </h3>
                <p className="text-halfBlack text-dg">
                  Permanent insurance coverage ensures that you have protection
                  for your entire life. This means your beneficiaries are
                  guaranteed a payout, regardless of when you pass away.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <h3 className="font-semibold text-[18px]">
                  How does the cash value component work?
                </h3>
                <p className="text-halfBlack text-dg">
                  The cash value component of whole life insurance grows over
                  time as you pay your premiums. This cash value can be accessed
                  during your lifetime through loans or withdrawals.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WholeLifeInfo;
