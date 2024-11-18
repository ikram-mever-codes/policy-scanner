import React, { useState } from "react";
import { ArrowBackIos, Close } from "@mui/icons-material";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import "./Head.css";

const EditProfileSidebar = ({ open, onClose }) => {
  const [gender, setGender] = useState(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [nicotineUse, setNicotineUse] = useState(null);

  const handleSubmit = () => {
    let existingData = JSON.parse(localStorage.getItem("quote-data"));
    existingData.dob = dob;
    existingData = nicotineUse ? "yes" : "no";
    existingData.contactInfo.name = name;
    existingData.gender = gender;
    localStorage.setItem("quoteData", JSON.stringify(existingData));
  };

  return (
    <Slide direction="left" in={open} mountOnEnter unmountOnExit>
      <div className="fixed top-0 right-0 h-[100vh]  w-[25vmax] overflow-y-scroll scrollbar-hidden overflow-x-hidden bg-white shadow-lg z-30  flex flex-col">
        <div className="flex relative  bg-selected2 justify-between items-center mb-4 px-4">
          <button
            onClick={onClose}
            className=" text-halfBlack absolute left-0 mx-4 my-3 top-0 hover:text-black transition flex justify-center items-center gap-3"
          >
            <ArrowBackIos sx={{ fontSize: "15px" }} /> Back
          </button>
          <h2 className="text-2xl w-full font-semibold text-center text-halfBlack py-3 ">
            Edit Profile
          </h2>
        </div>
        <div className="px-6 mt-10">
          <div className="flex justify-between items-center w-full gap-3  mb-4">
            <button
              onClick={() => setGender("male")}
              className={`w-full h-[3rem] flex justify-center items-center p-3 border border-solid rounded-md ${
                gender === "male"
                  ? "bg-primary2 bg-opacity-10 text-primary2 border-primary2 "
                  : "bg-gray-200 text-halfBlack"
              }`}
            >
              👨 Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={`w-full h-[3rem] flex justify-center items-center p-3 border border-solid rounded-md ${
                gender === "female"
                  ? "bg-primary2 bg-opacity-10 text-primary2 border-primary2 "
                  : "bg-gray-200 text-halfBlack"
              }`}
            >
              👩 Female
            </button>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Date of Birth Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Nicotine Use Question */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Have you used any nicotine product in the past 12 months?
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setNicotineUse("yes")}
                className={`w-full h-[3rem] flex justify-center items-center p-3 border border-solid rounded-md ${
                  nicotineUse === "yes"
                    ? "bg-primary2 bg-opacity-10 text-primary2 border-primary2 "
                    : "bg-gray-200 text-halfBlack"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setNicotineUse("no")}
                className={`w-full h-[3rem] flex justify-center items-center p-3 border border-solid rounded-md ${
                  nicotineUse === "no"
                    ? "bg-primary2 bg-opacity-10 text-primary2 border-primary2 "
                    : "bg-gray-200 text-halfBlack"
                }`}
              >
                No
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              handleSubmit();
            }}
            className="mt-6 py-3 rounded-lg w-full bg-secondary text-black text-center font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default EditProfileSidebar;
