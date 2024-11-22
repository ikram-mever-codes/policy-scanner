import Image from "next/image";
import React from "react";
import WholeLife3 from "../../assets/whole-life-3.png";
const CriticalInfo6 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          What is the best critical illness insurance in Canada?{" "}
        </h2>

        <div className="w-full flex justify-between items-center gap-[2rem] mt-[2rem] h-full">
          <Image
            src={WholeLife3}
            alt="What is whole life Insurance in Canada"
            objectFit="cover"
            width={461}
            height={315}
            className="h-max"
            objectPosition="center"
            loading="lazy"
            priority={false}
          />
          <ul className="custom-list-bullets flex flex-col justify-around items-start h-full  w-full  gap-[90px] text-[16px]">
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p className="text-dg text-halfBlack">
                  The best critical illness insurance should offer comprehensive
                  protection, covering a wide range of illnesses such as cancer,
                  stroke, or heart disease. It should also include the shortest
                  survival period and affordable.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
                <p className="text-dg text-halfBlack">
                  At PolicyScanner you can compare multiple critical life
                  insurance quotes and also get quotes for critical illness
                  insurance for families and you can get the best affordable
                  policy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CriticalInfo6;
