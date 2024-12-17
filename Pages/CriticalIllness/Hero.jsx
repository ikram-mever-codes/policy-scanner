"use client";
// import Image from "next/image";
// import React from "react";
// import wholeLife2 from "../../assets/home-asset-3.png";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[650px] hero-bg  min-w-screen overflow-hidden bg-foreground2"
//       style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
//     >
//       <div className="flex justify-end   items-end   w-full h-full  ">
//         <div className="w-max h-full  flex justify-center pb-[80px] gap-[2rem]   items-center flex-col ">
//           <div className="w-full h-max flex justify-end items-start flex-col gap-[1rem]">
//             <h1 className="text-[45px] font-extrabold  text-left text-halfBlack">
//               Compare and Buy <br />
//               Critical Illness Insurance{" "}
//             </h1>
//             <p className="w-full text-halfBlack text-[20px] font-semibold text-left ">
//               Save time, Save money{" "}
//             </p>
//           </div>
//           <Link
//             href="#"
//             className="relative group flex justify-center items-center text-[18px] w-full h-[5rem] shadow-2xl text-halfBlack rounded-2xl bg-white border border-solid hover:text-white border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-primary scale-x-0 origin-bottom-left transition-transform duration-300 group-hover:scale-x-100"></div>
//             <span className="relative z-10">Compare CI Insurance</span>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full h-full flex justify-start items-end">
//         <Image
//           src={wholeLife2}
//           alt="Policy Scanner Insurance"
//           height={510}
//           width={500}
//           className="object-fit relative bottom-0  left-[130px]  lg:left-[150px] 4xl:left-[200px] object-center"
//         />
//       </div>
//     </section>
//   );
// };

// export default
// Hero;

import React from "react";

const CriticalIllnessHero = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500">
      {/* Clean background with subtle elements */}
      <div className="absolute inset-0">
        {/* Soft gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(
                 circle at 70% 20%,
                 rgba(94, 234, 212, 0.4) 0%,
                 transparent 60%
               )`,
          }}
        />

        {/* Single subtle curved line */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <path
            d="M-100,300 Q400,200 900,300"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="120"
            fill="none"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div
        className="relative z-10 mx-auto px-4 py-16"
        style={{ maxWidth: "1200px" }}
      >
        <div className="max-w-2xl">
          <h1 className="text-[50px] font-bold leading-[4rem] text-left text-white">
            Protect your way of life
            <br />
            against critical illness
          </h1>
          <p className="text-[18px] text-white/90 my-[2.5rem]">
            Compare critical illness insurance quotes from leading Canadian
            providers
          </p>
          <div className="max-w-md">
            <button
              className="relative w-full bg-white text-teal-600 rounded-xl py-4 px-8 text-lg font-medium
                         hover:bg-teal-600 hover:text-white transition-colors duration-300"
            >
              Get Your Quote
            </button>
          </div>
          <div className="absolute bottom-4 left-0 w-full">
            <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
              <div className="flex items-center justify-start space-x-8 text-white/90 text-sm">
                {[
                  "Coverage Experts",
                  "Leading Insurers",
                  "Health Specialists",
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white">✓</span>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CriticalIllnessHero;
