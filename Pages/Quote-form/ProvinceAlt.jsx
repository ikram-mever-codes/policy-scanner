import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import { Grid } from "react-loader-spinner";
import { TextField } from "@mui/material";

const ProvinceAlt = ({}) => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <Image src={quoteForm3} alt="Teena" className="" />
      <div className="w-full h-max flex text-halfBlack justify-start items-center gap-[4rem] flex-col  mt-[20px]">
        <div className="text-halfBlack font-normal text-[18px] leading-l2">
          Not from Ontario, please join our mailing list for updates
        </div>

        <div className="w-[350px] h-max">
          <TextField
            fullWidth
            id="name"
            name="name"
            type="email"
            variant="outlined"
            placeholder="Enter your email"
            // label="Name"
            InputProps={{
              style: {
                width: "350px",
                borderColor: "#494949",
                height: "3rem",
                borderRadius: "6px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProvinceAlt;
