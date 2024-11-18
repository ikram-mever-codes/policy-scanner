import Image from "next/image";
import React from "react";
import wholeLife5 from "../../assets/whole-life-6.png";
import { ArrowForwardIos } from "@mui/icons-material";
const WholeLifeInfo5 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How much does whole life insurance cost in Canada?
        </h2>
        <p>
          Even though the cost of whole life insurance depends on your personal
          circumstances such as age, gender, lifestyle, and smoking status. it
          is expensive than term life insurance for two main reasons: first, the
          payout is guaranteed regardless of when you pass away, and second,
          there is a savings or investment component included in the policy.
        </p>
        <div className="flex justify-between items-center h-max w-full gap-[3rem]">
          <div className="w-full h-full flex justify-between items-start gap-[2rem] flex-col">
            <div className="flex gap-[10px] flex-col text-left">
              <h3 className="text-[18px] font-semibold">
                What is the monthly premium for whole life insurance?
              </h3>
              <p className="text-[16px]">
                Whole life insurance quotes can be tailored based on customer
                preferences. You can choose to leave a tax-free inheritance for
                your kids and grandkids or utilize the policy as a source of
                retirement income.
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
        <div className="w-full h-max border border-solid relative  overflow-hidden border-halfBlack rounded-xl">
          <table class="w-full h-full text-center border-collapse">
            <thead class="bg-gray-100 rounded-t-xl">
              <tr className="bg-primary text-white">
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Age{" "}
                </th>
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  $50k Coverage
                </th>
                <th class="py-4 px-6 border-b  border-halfBlack">
                  $100K Coverage
                </th>

                <th class="py-4 px-6 border-b  border-halfBlack">
                  $200K Coverage
                </th>
              </tr>
            </thead>
            <tbody class="rounded-b-xl">
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  30-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $30 - $35/mo{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $50 - $55/mo
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  $100 - $105/mo{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  40-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $40 - $45/mo{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $70 - $75/mo
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  $140 - $145/mo{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  50-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $60 - $65/mo{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $110 - $115/mo
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$35-$50</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6  border-r border-halfBlack">55+ Years</td>
                <td class="py-4 px-6  border-r border-halfBlack">$500,000</td>
                <td class="py-4 px-6 border-r border-halfBlack">
                  $110 - $115/mo
                </td>
                <td class="py-4 px-6  border-halfBlack">$220 - $225/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-center items-center gap-[3rem] mt-[3rem]">
          <div>
            <h4 className="text-[25px] font-bold text-primary text-left">
              Direct Comparison
            </h4>
            <p className="text-left mt-[10px]">
              Compare Quotes Directly and Instantly
            </p>
          </div>
          <div className="whole-life-divider"></div>
          <div>
            <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
              Start Comparing
              <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WholeLifeInfo5;
