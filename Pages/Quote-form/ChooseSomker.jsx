import React, { useState } from "react";
import quoteForm3 from "../../assets/quote-form-3.png";
import Image from "next/image";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { SmokeFreeRounded, SmokingRoomsOutlined } from "@mui/icons-material";
import { uploadPostData } from "@/app/api";

const ChooseSmoker = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (choice) => {
    if (loading) return;
    setLoading(true);

    try {
      const existingData = JSON.parse(localStorage.getItem("quote-data")) || {};
      existingData.smoker = choice;
      localStorage.setItem("quote-data", JSON.stringify(existingData));

      onClose(choice);

      await uploadPostData({ ...existingData, smoker: choice });
    } catch (error) {
      console.error("Error while handling smoker choice:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-start items-center flex-col gap-[0rem]">
      <div className="w-full h-full flex text-halfBlack justify-start items-center gap-[5px] flex-col">
        <div className="flex items-center gap-2 flex-col">
          <div className="w-full h-max border-b font-light text-center text-[14px] p-4   border-halfBlack mb-4">
            One final question to get the most accurate quotes.{" "}
          </div>
          <div className="text-halfBlack font-normal px-6 text-[18px] text-center">
            Have you smoked or used any nicotine products in the past 12 months?
          </div>
        </div>
      </div>
      <div className="flex justify-center  items-center gap-[3rem] mt-[2rem]">
        <div className="w-max h-max flex justify-center items-center flex-col gap-[10px] text-[18px]">
          <button
            disabled={loading}
            className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
              loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={() => handleClick("yes")}
          >
            <SmokingRoomsOutlined
              sx={{ fontSize: "70px" }}
              className="text-[70px] text-halfBlack"
            />
          </button>
          Yes
        </div>
        <div className="w-max h-max flex justify-center items-center flex-col gap-[10px] text-[18px]">
          <button
            disabled={loading}
            className={`w-[6rem] h-[6rem] rounded-md text-[18px] border border-solid border-halfBlack  ease-in-out transition-all duration-[300ms] hover:bg-grays/20 ${
              loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={() => handleClick("no")}
          >
            <SmokeFreeRounded
              sx={{ fontSize: "70px" }}
              className="text-[70px] text-halfBlack"
            />
          </button>
          No
        </div>
      </div>
    </div>
  );
};

export default ChooseSmoker;
