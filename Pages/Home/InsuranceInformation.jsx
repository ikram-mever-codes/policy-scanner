import React from "react";
import info1 from "../../assets/info1.png";
import Image from "next/image";
const InsuranceInformation = () => {
  return (
    <section className="w-full min-h-[100vh] h-max px-[60px] py-[8rem] flex justify-start items-center gap-[7rem] flex-col">
      <div className="w-[75%] flex justify-start items-center flex-col gap-[30px] px-[40px]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          Do I need a life insurance policy?
        </h2>
        <ul className="custom-list-bullets flex justify-start items-center flex-col gap-[40px] text-[16px]">
          <li>
            Life insurance provides peace of mind and security for you and your
            loved ones. Whether you are married, divorced, or expecting a child,
            having the best life insurance coverage directly from the top
            insurer ensures peace of mind.
          </li>{" "}
          <li>
            Life insurance is crucial for you in various life stages and
            situations. If you are an young adult, it protects against
            unexpected financial burdens and locks in lower premiums. if you are
            a parent it can ensure financial security for your children's
            education and upbringing. If you are a homeowner it could benefit
            from mortgage insurance.
          </li>{" "}
          <li>
            There are also different types of life insurance policies available.
            A direct term insurance policy is flexible in terms of affordability
            and policy term. In contrast, a direct whole life insurance policy
            is expensive but it offers lifelong coverage with cash value
            accumulation.
          </li>
          <li>
            At PolicyScanner, we offer direct life insurance quotes from top
            insurance companies with no additional fees or hidden costs. Our
            services include direct mortgage insurance quotes and direct
            insurance quotes for everyone. Tools like our mortgage calculator
            life insurance calculator and critical illness calculator can help
            to determine necessary coverage and provide no-obligation quotes.
          </li>
        </ul>
      </div>
      <div className="w-[75%] px-[40px] flex justify-start flex-col items-center gap-[4rem]">
        <h2 className="w-full font-bold text-[28px]  text-left text-halfBlack">
          What's the difference between term life and whole life insurance?
        </h2>
        <div className="w-full h-max flex justify-center gap-[3rem] items-center">
          <Image
            src={info1}
            height={600}
            width={400}
            className=" object-cover object-center"
            alt="What's the difference between term life and whole life insurance"
          />
          <ul className="w-[50%] custom-list-bullets flex justify-start items-center flex-col gap-[3rem] text-[16px]">
            <li>
              Term life insurance in Canada offers coverage for a specific term,
              such as term 10, term 20, term 30, or until age 65. It is
              cost-effective and ideal for you for temporary needs like mortgage
              protection and covering outstanding debts.
            </li>
            <li>
              Meanwhile, direct whole life insurance quotes tend to be higher
              because they offer you lifelong protection along with cash value
              accumulation. you can use the cash value for various purposes,
              such as leaving an inheritance to your kids or grand kids, funding
              a child's education, or supplementing retirement income.
            </li>
            <li>
              Additionally, whole life insurance policies offer tax-free loan
              options, providing income replacement and financial flexibility in
              your later years. These features make whole life insurance a
              versatile and beneficial option for long-term financial planning.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInformation;
