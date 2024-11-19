import React from "react";
import Image from "next/image";
import prov1 from "../../assets/prov1.png";
import prov2 from "../../assets/prov2.png";
import prov3 from "../../assets/prov3.png";
import prov4 from "../../assets/prov4.png";

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
    <section className="w-full px-[150px] py-[60px] bg-foreground2 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-8 sm:gap-12 w-full">
          <h2 className="text-[40px] mb-[20px] font-bold text-center text-halfBlack">
            Our partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-[2rem]">
            {partners.map((prov, index) => (
              <div
                key={index}
                className="h-[100px] w-[174px] 
                  p-4 
                  bg-white border border-gray2 
                  flex justify-center items-center rounded-lg 
                  transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={prov}
                  alt="Partner Image"
                  className="w-full h-full object-contain scale-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
