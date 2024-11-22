import Image from "next/image";
import React from "react";
import wholeLife5 from "../../assets/whole-life-6.png";
import { ArrowForwardIos } from "@mui/icons-material";

const MortgageTable = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[60px] pt-0 flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[5rem]">
        <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            How is Mortgage Insurance Different from Term Life Insurance?{" "}
          </h2>

          <div className="w-full h-max border border-solid relative mt-[1rem]  overflow-hidden border-halfBlack rounded-xl">
            <table class="w-full h-full text-center border-collapse">
              <thead class="bg-gray-100 rounded-t-xl text-left">
                <tr className="bg-primary text-white">
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Feature{" "}
                  </th>
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Mortgage insurance{" "}
                  </th>
                  <th class="py-4 px-6 border-b  border-halfBlack">
                    Life insurance{" "}
                  </th>
                </tr>
              </thead>
              <tbody class="rounded-b-xl text-left">
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Purpose{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Pay off mortgage upon death, disability, or critical illness{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Pay off mortgage upon death, disability, or critical illness{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Beneficiaries{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Mortgage lender{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Chosen beneficiaries{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Coverage Amount{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Decreases over time as the mortgage balance reduces{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Remains constant throughout the term{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Control Over Funds{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Lender controls payout, used solely to pay off the mortgage{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Beneficiaries control payout, allowing flexibility for
                    different financial priorities{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Health Requirements{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    No detailed health examination required{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    No detailed health examination required{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Customization Options{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Limited; generally includes basic mortgage coverage with
                    optional add-ons{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Highly customizable; can include add-ons with riders{" "}
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Cost{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Premiums often decrease as the mortgage balance decreases{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Fixed premiums for the term duration, providing predictable
                    payments{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-[3rem] mt-[0rem] mb-[3rem]">
          <div>
            <h4 className="text-[25px] font-bold text-primary text-left">
              Save Time, Save Money{" "}
            </h4>
            <p className="text-left mt-[10px] text-dg text-halfBlack">
              Compare Life Insurance Quotes Instantly.{" "}
            </p>
          </div>
          <div className="whole-life-divider"></div>
          <div>
            <button className="w-max h-[2.8rem] flex justify-center items-center bg-secondary text-nowrap px-[15px] py-[5px] gap-[10px] rounded-lg">
              Get Instant Quotes{" "}
              <ArrowForwardIos className="rounded-full w-[20px] h-[20px] text-[15px] bg-white text-black p-[5px]" />
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageTable;
