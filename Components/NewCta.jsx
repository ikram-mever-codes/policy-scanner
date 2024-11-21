import React from "react";
import newCta1 from "../assets/new-cta-1.png";
import Image from "next/image";

const NewCta = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem]  py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full  shadow-2xl  bg-foreground2 p-4 pt-[3rem]  rounded-2xl flex justify-center overflow-hidden items-center flex-col  gap-[3rem]">
        <h2 className="w-full font-bold text-[35px] text-center text-halfBlack">
          Get insured from the comfort of your home
        </h2>
        <div className="w-full h-[360px] flex justify-between   flex-col-reverse items-cener">
          {/* <Image
            src={newCta1}
            width={340}
            className="object-cover object-center"
            height={200}
            alt="          Get insured from the comfort of your home
"
          /> */}

          <div className="w-full flex justify-start items-center gap-[4rem]  relative left-[-30px] ">
            <div className="w-[628px] h-[90px] rounded-lg bg-primary rounded-tl-none rounded-bl-none ">
              <div className="w-full h-full flex justify-end  items-center p-6 gap-5 ">
                <div className="text-white text-right text-[20px]">
                  Monthly premium
                </div>
                <div className="text-white text-[40px]">$350</div>
              </div>
            </div>
            <button className="w-[250px] h-[64px] text-[22px] rounded-xl bg-secondary text-black">
              View Plans
            </button>
          </div>
          <div className="w-[620px] h-full flex justify-center overflow-hidden items-end flex-col gap-[2rem]">
            <div className="text-[25px] font-semibold text-right pr-[30px]  ">
              Calculate your Insurance Premium
            </div>
            <div className="w-[472px] h-[128px] grid-cols-2 grid gap-x-[4rem] justify-center items-center  ">
              <div className="w-[220px] h-[44px] flex justify-end items-center gap-[2rem]">
                <label htmlFor="age" className="font-medium ">
                  Age
                </label>
                <select
                  name="age"
                  id="age"
                  className="w-[120px] h-[44px] rounded-lg border-halfBlack border bg-transparent px-3 border-solid"
                >
                  <option value="" disabled selected>
                    Your Age
                  </option>
                  <option value="under18">Under 18</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65plus">65+</option>
                </select>
              </div>

              <div className="w-[165px] h-[44px] flex justify-center items-center gap-[2rem]">
                <label htmlFor="gender" className="font-medium ">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  className="w-[120px] h-[44px] rounded-lg border-halfBlack border bg-transparent px-3 border-solid"
                >
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="w-[120px] h-[44px] flex justify-start items-center gap-[2rem]">
                <label htmlFor="coverage" className="font-medium  text-[15px]">
                  Coverage
                </label>
                <select
                  name="coverage"
                  id="coverage"
                  className="min-w-[120px] h-[44px] rounded-lg border-halfBlack border bg-transparent px-3 border-solid"
                >
                  <option value="" disabled selected>
                    1 Cr
                  </option>
                  <option value="2 Cr">2 Cr</option>
                  <option value="3 Cr">3 Cr</option>
                </select>
              </div>
              <div className="w-[165px] h-[44px] flex justify-center items-center gap-[2rem]">
                <label htmlFor="province" className="font-medium ">
                  Province
                </label>
                <select
                  name="province"
                  id="province"
                  className="w-[120px] h-[44px] rounded-lg border-halfBlack border bg-transparent px-3 border-solid"
                >
                  <option value="" disabled selected>
                    Ontario
                  </option>
                  <option value="Ontario">Ontario</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCta;
