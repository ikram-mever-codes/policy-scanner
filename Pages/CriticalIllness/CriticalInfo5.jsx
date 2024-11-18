import Image from "next/image";
import React from "react";
import criticalInfo2 from "../../assets/critical-info-2.png";
const CriticalInfo5 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[1rem] py-[3rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center text-halfBlack flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          Best critical illness insurance companies in Canada{" "}
        </h2>
        <p>
          Canada has many top-tier insurance companies offering critical illness
          coverage, and at PolicyScanner, we work directly with most of them.
          This means you can easily compare and find the best options available.
        </p>
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
          <ul className="custom-list-bullets flex flex-col gap-[30px] text-[16px]">
            <h4 className="w-full font-semibold text-[18px]  text-left text-halfBlack">
              Why comparing quotes matters
            </h4>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p>
                  Our network includes leading companies like Manulife
                  Financial, Foresters Financial, Beneva, BMO Insurance, Canada
                  Life, Desjardins Insurance, Humania Assurance, IA Financial
                  Group, Ivari, Medavie Blue Cross, RBC Insurance, Sun Life
                  Financial, and Assumption Life.
                </p>
              </div>
            </li>

            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p>
                  PolicyScanner provides you with the option to compare critical
                  illness insurance quotes from of these companies.
                  Additionally, you can receive personalized critical illness
                  insurance quotes in less than three minutes.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CriticalInfo5;
