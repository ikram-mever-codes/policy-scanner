import Image from "next/image";
import React from "react";
import wholeLife5 from "../../assets/whole-life-6.png";
import { ArrowForwardIos } from "@mui/icons-material";
import CriticalInfo4 from "./CriticalInfo4";
const CriticalTable = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[40px] pb-[40px] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[5rem]">
        <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
          <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
            How much does critical illness insurance cost monthly?{" "}
          </h2>
          <p className="text-halfBlack text-dg ">
            The cost of critical illness insurance can vary significantly
            depending on factors such as age, gender, smoking status, and the
            type of coverage you choose. Here’s a simple breakdown of what the
            monthly premium would be for a $25,000 basic coverage plan:
          </p>
          <div className="w-full h-max border border-solid relative mt-[1rem]  overflow-hidden border-halfBlack rounded-xl">
            <table class="w-full h-full text-center border-collapse">
              <thead class="bg-gray-100 rounded-t-xl text-left">
                <tr className="bg-primary text-white">
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Age{" "}
                  </th>
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Male (Non-Smoker){" "}
                  </th>
                  <th class="py-4 px-6 border-b  border-halfBlack">
                    Female (Non-Smoker){" "}
                  </th>
                  <th class="py-4 px-6 border-b  border-halfBlack">
                    Male (Smoker){" "}
                  </th>
                  <th class="py-4 px-6 border-b  border-halfBlack">
                    Female (Smoker)
                  </th>
                </tr>
              </thead>
              <tbody class="rounded-b-xl text-left">
                <tr class="even:bg-gray-50 text-halfBlack">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    20{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $6.2{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $7.10
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $8.05
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">$8.20</td>
                </tr>
                <tr class="even:bg-gray-50 text-halfBlack">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    20{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $6.2{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-r  border-halfBlack">
                    $7.10
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $8.05
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">$8.20</td>
                </tr>{" "}
                <tr class="even:bg-gray-50 text-halfBlack">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    20{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $6.2{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $7.10
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $8.05
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">$8.20</td>
                </tr>{" "}
                <tr class="even:bg-gray-50 text-halfBlack">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    20{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $6.2{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $7.10
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $8.05
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">$8.20</td>
                </tr>{" "}
                <tr class="even:bg-gray-50 text-halfBlack">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    20{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    $6.2{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r  border-halfBlack">
                    $7.10
                  </td>
                  <td class="py-4 px-6 border-b  border-r border-halfBlack">
                    $8.05
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">$8.20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="custom-list-bullets flex flex-col gap-[40px] text-[16px] mt-5">
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[5px]">
                <h3 className="font-semibold text-halfBlack  text-[18px]">
                  Understanding your quote
                </h3>
                <p className="text-halfBlack text-dg ">
                  These rates provide a starting point for what you might expect
                  to pay, but your actual monthly premium could be higher or
                  lower based on personal factors. For instance, smokers
                  generally face higher premiums due to increased health risks.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[5px]">
                <h3 className="font-semibold text-halfBlack  text-[18px]">
                  Getting the best rate{" "}
                </h3>
                <p className="text-halfBlack text-dg ">
                  For best rates it’s essential to compare direct quotes from
                  multiple providers. PolicyScanner makes it easy to explore
                  different options and find a plan that fits your needs and
                  budget. Compare quotes to see how much you could save on your
                  critical illness insurance.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/*
        <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            How much does whole life insurance cost in Canada?
          </h2>
          <p>
            Even though the cost of whole life insurance depends on your
            personal circumstances such as age, gender, lifestyle, and smoking
            status. it is expensive than term life insurance for two main
            reasons: first, the payout is guaranteed regardless of when you pass
            away, and second, there is a savings or investment component
            included in the policy.
          </p>
          <div className="flex justify-between items-center h-max w-full gap-[3rem]">
            <div className="w-full h-full flex justify-between items-start gap-[2rem] flex-col">
              <div className="flex gap-[10px] flex-col text-left">
                <h3 className="text-[18px] font-semibold">
                  What is the monthly premium for whole life insurance?
                </h3>
                <p className="text-[16px]">
                  Whole life insurance quotes can be tailored based on customer
                  preferences. You can choose to leave a tax-free inheritance
                  for your kids and grandkids or utilize the policy as a source
                  of retirement income.
                </p>
              </div>
              <div className="flex gap-[10px] flex-col text-left">
                <h3 className="text-[18px] font-semibold">
                  Monthly Whole Life Insurance Premiums in Canada
                </h3>
                <p className="text-[16px]">
                  This table shows approximate rates for a non-smoking male in
                  perfect health.
                </p>
              </div>
            </div>
            <Image
              src={wholeLife5}
              alt="How much does whole life insurance cost in Canada?"
              objectFit="cover"
              objectPosition="center0"
              width={400}
              height={400}
            />
        </div>
          </div> */}
      </div>
    </section>
  );
};

export default CriticalTable;
