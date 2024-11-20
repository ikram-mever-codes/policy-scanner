import Image from "next/image";
import React from "react";
import home1 from "../../assets/home-asset-3.png";
import ellipseImage from "../../assets/ellipse1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        className="w-full h-[650px] hero-bg  min-w-screen 
        overflow-hidden bg-foreground2   "
        style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
      >
        <div className="flex justify-end   items-end   w-full h-full  ">
          <div className="w-max h-full  flex justify-end pb-[80px] gap-[1rem]   items-center flex-col ">
            <div className="w-full h-max flex justify-end items-start flex-col">
              <h1 className="text-[45px] font-extrabold  text-left text-halfBlack">
                Let us do the comparison. <br /> You enjoy the savings.
              </h1>
              <p className="w-full text-halfBlack text-[17px] text-left my-[10px]">
                Compare Canada’s best life Insurance rates instantly
              </p>
            </div>

            <div className="w-full grid grid-cols-2 pb-[100px] gap-x-[2rem] gap-y-[1rem] mt-[1.5rem]">
              {["Term Life", "Whole Life", "Mortgage", "Critical Illness"].map(
                (item) => (
                  <Link href="/quote-form" key={item}>
                    <div className="relative group flex justify-center items-center w-[260px] h-[85px] shadow-2xl text-halfBlack  rounded-2xl bg-white border border-solid hover:text-white border-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden">
                      <div className="absolute inset-0 bg-primary scale-x-0 origin-bottom-left transition-transform duration-500 group-hover:scale-x-100"></div>

                      <h3 className="relative text-center text-[18px] font-normal z-10">
                        {item}
                      </h3>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-start items-end">
          <Image
            src={home1}
            alt="Policy Scanner Insurance"
            height={466}
            width={492}
            className="object-fit relative bottom-0  left-[150px]  lg:left-[250px] object-center"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

// <section
// className="flex justify-between items-center w-full h-[88vh] pt-[30px] pb-0 overflow-hidden"
// style={{
//   background: "linear-gradient(180deg, #01B0B0 0%, #006262 100%)",
// }}
// >
// <div
//   className="w-full h-full relative  flex justify-center items-center"
//   style={{
//     width: "600px",
//     height: "600px",
//     borderRadius: "50%",
//   }}
// >
//   <Image
//     src={ellipseImage}
//     alt="Ellipse Background"
//     objectPosition="center"
//     width={800}
//     height={800}
//     objectFit="cover"
//     className=" absolute z-0"
//   />
//   <div className="flex flex-col left-[100px] items-start justify-center relative z-10 w-[80%] h-full gap-[20px]">
//     <h1 className="text-[35px] font-extrabold text-white text-left">
//       Compare Directly, Save Instantly on Life Insurance
//     </h1>
//     <button className="w-max px-[20px] h-[2.8rem] bg-secondary rounded-lg font-medium mt-2">
//       Compare Quotes
//     </button>
//   </div>
// </div>
// <div>
//   <Image
//     src={home1}
//     alt="Policy Scanner Insurance"
//     width={616}
//     height={600}
//     className="object-fit object-center w-full h-full relative right-[100px]"
//   />
// </div>
// </section>
