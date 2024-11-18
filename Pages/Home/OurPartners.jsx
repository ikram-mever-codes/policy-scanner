import React from "react";
import prov1 from "../../assets/prov1.png";
import prov2 from "../../assets/prov2.png";
import prov3 from "../../assets/prov3.png";
import prov4 from "../../assets/prov4.png";
import Image from "next/image";
const OurPartners = () => {
  const partners = [
    prov1,
    prov2,
    prov3,
    prov4,
    prov1,
    prov2,
    prov3,
    prov4,
    prov1,
    prov2,
    prov3,
    prov4,
  ];
  return (
    <section className="w-full h-max sm:px-[60px] px-[20px] pt-[2rem] pb-[4rem] bg-foreground2 flex justify-start items-center   flex-col">
      <div className="sm:w-[85%] w-full flex justify-start items-center flex-col gap-[3rem] sm:gap-[5rem] sm:px-[40px]">
        <h2 className="w-full font-bold text-[35px] text-center text-halfBlack">
          Our partners
        </h2>
        <div className="w-full  grid grid-cols-4 sm:grid-cols-6 gap-[1rem]">
          {partners.map((prov, index) => {
            return (
              <div
                key={index}
                className="h-[3rem] sm:h-[6rem] w-[5rem] sm:w-[10rem] p-[1rem] bg-white border-solid border border-gray2 flex justify-center items-center rounded-lg"
              >
                <Image src={prov} alt="Partner Image" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
