import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";

const ProvinceAlt = ({}) => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" className="" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[5px] flex-col  mt-[20px]">
        <div className="text-halfBlack font-normal text-[18px] leading-l2">
          Not from Ontario, please join our mailing list for updates
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProvinceAlt;
