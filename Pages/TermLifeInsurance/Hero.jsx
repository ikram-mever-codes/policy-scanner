// import Image from "next/image";
// import React from "react";
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
//               Compare and Buy Canada's
//               <br />
//               Best Term Life Insurance
//             </h1>
//             <p className="w-full text-halfBlack text-[20px] font-semibold text-left ">
//               Quick, easy & hassle free{" "}
//             </p>
//           </div>

//           <Link
//             href="#"
//             className="relative group flex justify-center items-center text-[18px] w-full h-[5rem] shadow-2xl text-halfBlack rounded-2xl bg-white border border-solid hover:text-white border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-primary scale-x-0 origin-bottom-left transition-transform duration-300 group-hover:scale-x-100"></div>
//             <span className="relative z-10">Compare Term Life Insurance</span>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full h-full flex justify-start items-end">
//         <Image
//           src={termLifeHero}
//           alt="Policy Scanner Insurance"
//           height={510}
//           width={500}
//           className="object-fit relative bottom-0  left-[130px]  lg:left-[150px] 4xl:left-[200px] object-center"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Image from "next/image";
import React from "react";
import termLifeHero from "../../assets/term-life-hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 150%, rgba(45, 212, 191, 0.7) 0%, transparent 50%),
                             radial-gradient(circle at 80% -50%, rgba(45, 212, 191, 0.5) 0%, transparent 50%)`,
          }}
        />

        {/* Animated rings */}
        <div className="absolute top-[-30%] right-[-10%] w-[800px] h-[800px] animate-slow-spin">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(45, 212, 191, 0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="rgba(45, 212, 191, 0.08)"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="rgba(45, 212, 191, 0.06)"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Abstract shapes */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#2DD4BF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#115E59", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-0 container mx-auto pl-[10rem] flex justify-start  h-full items-center py-16 pb-0">
        <div className="max-w-2xl">
          <div className="mb-[5rem]">
            <h1 className="text-5xl leading-[64px]  font-bold mb-[1rem]  text-white ">
              Protect your family's future
              <br />
              with Term Life Insurance
            </h1>
            <p className="text-[20px] text-white/90 mb-8">
              Get coverage from $100,000 to $5M with rates starting at $25/month
            </p>
          </div>

          <div className="max-w-md">
            <button
              className="group relative w-full overflow-hidden bg-white text-teal-700 rounded-xl py-4 px-8 text-lg font-medium
                        transform transition-all duration-300 ease-in-out
                        hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get Your Free Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </button>

            {/* Sub-text */}
            <p className="text-center text-white/80 text-sm mt-4">
              Takes only 1 minute • No obligation
            </p>
          </div>
        </div>
        <div className="w-max h-full flex justify-start items-end">
          <Image
            src={termLifeHero}
            alt="Policy Scanner Insurance"
            height={510}
            width={500}
            className="object-fit   relative bottom-0 left-[200px] object-center"
          />
        </div>
        {/* 
        <div className="absolute bottom-4 left-[9rem] w-full">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-start space-x-8 text-white/90 text-sm">
              {[
                "Licensed Providers",
                "No Medical Option",
                "Price Match Guarantee",
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center">
                    <span className="text-teal-300">✓</span>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Trust indicators */}
    </div>
  );
};

export default Hero;
