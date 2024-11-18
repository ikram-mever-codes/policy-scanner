"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#818181"
        ariaLabel="oval-loading"
        secondaryColor="#D3D3D3"
      />
    </div>
  );
};

export default Loading;
