import React from "react";

const TermLifeTable2 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1000px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What’s the difference between term life insurance and whole life
          insurance?
        </h2>
        <div className="w-full h-max border border-solid relative mt-[1rem]  overflow-hidden border-halfBlack rounded-xl">
          <table class="w-full h-full text-center border-collapse">
            <thead class="bg-gray-100 rounded-t-xl text-left">
              <tr className="bg-primary text-white">
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Feature{" "}
                </th>
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Term Life Insurance{" "}
                </th>
                <th class="py-4 px-6 border-b  border-halfBlack">
                  Whole Life Insurance{" "}
                </th>
              </tr>
            </thead>
            <tbody class="rounded-b-xl text-left">
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Coverage{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Temporary coverage (10, 20, or 30 years){" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Lifelong coverage{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Premiums{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Lower premiums{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Higher premiums{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Cash Value{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  No cash value{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Accumulates cash value over time{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Policy Duration{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Fixed term{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Permanent, as long as premiums are paid
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Death Benefit{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Paid if death occurs during the term{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Guaranteed payout whenever death occurs{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Loan Options{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  No loan options
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Can borrow against the cash value{" "}
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Best For{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Short-term financial protection{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Long-term financial planning and estate planning
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Flexibility
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Simple and straightforward{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Includes savings/investment component
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Cost Comparison{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  More affordable for initial coverage{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  More expensive due to added benefits
                </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  Investment Component{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  None{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">
                  Savings component grows tax-deferred
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TermLifeTable2;
