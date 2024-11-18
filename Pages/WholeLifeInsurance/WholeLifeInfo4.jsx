import React from "react";

const WholeLifeInfo4 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center items-center flex-col gap-[5rem]">
        <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            Can You Cash Out a Whole Life Insurance Policy?
          </h2>
          <p className="mt-[1rem]">
            Yes, a whole of life insurance policies can be cashed out. This
            involves accessing the accumulated cash value that has built up over
            time. Here's a breakdown of how this works and what should be taken
            into consideration:
          </p>
          <h3 className="font-semibold text-[22px] mt-[1rem]">
            How to Cash Out
          </h3>
          <ul className="custom-list-bullets flex flex-col gap-[20px] text-[16px]">
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h4 className="font-semibold text-[18px]">Policy Surrender</h4>
                <p>
                  This means canceling your whole life insurance policy and
                  receiving the cash surrender value, which is the whole life
                  insurance cash value minus any fees. Selecting this option
                  will end your coverage.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h4 className="font-semibold text-[18px]">Policy Loans</h4>
                <p>
                  You can take out a policy loan against the cash value of your
                  whole life insurance without canceling the policy. This is the
                  best option to access the cash value without affecting the
                  whole life insurance policy.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h4 className="font-semibold text-[18px]">Withdrawals</h4>
                <p>
                  You can also withdraw the accumulated cash value from your
                  whole life insurance policy. However, there will be tax
                  implications for the withdrawn amount.
                </p>
              </div>
            </li>
            <li className="w-full flex justify-start items-start">
              <div className="w-full h-max flex justify-start items-start flex-col gap-[10px]">
                <h4 className="font-semibold text-[18px]">
                  Time Frame for Cash Value Accumulation
                </h4>
                <p>
                  It typically takes several years for a whole life insurance
                  policy to build significant cash value. Most policies start
                  accumulating cash value after the first few years of premium
                  payments, and it usually takes about 5 to 10 years before the
                  cash value grows substantially.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full h-max flex justify-start items-start flex-col gap-[1rem]">
          <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
            Whole Life Insurance Vs Universal Life Insurance?
          </h2>
          <p>
            Let's analyze the whole Life Insurance and universal Life Insurance
            policies and understand their key differences.
          </p>
          <div className="w-full h-max border border-solid relative mt-[1rem]  overflow-hidden border-halfBlack rounded-xl">
            <table class="w-full h-full text-center border-collapse">
              <thead class="bg-gray-100 rounded-t-xl">
                <tr className="bg-primary text-white">
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Feature{" "}
                  </th>
                  <th class="py-4 px-6 border-b border-r border-halfBlack">
                    Whole Life Insurance{" "}
                  </th>
                  <th class="py-4 px-6 border-b  border-halfBlack">
                    Universal Life Insurance{" "}
                  </th>
                </tr>
              </thead>
              <tbody class="rounded-b-xl">
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Coverage
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Lifelong coverage
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Lifelong coverage with flexible premiums
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Premiums
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Fixed premiums{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Flexible premiums
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Cash Value{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Accumulates at a fixed rate over time{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Cash value growth based on investment performance
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Policy Duration{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Permanent, as long as premiums are paid{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Permanent, with adjustable payment structures
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Death Benefit{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Guaranteed death benefit{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Flexible death benefit, adjustable over time
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Loan Options{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Can borrow against cash value{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Can borrow against cash value
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Best For{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Long-term stability and fixed premiums{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Flexibility in premiums and death benefit adjustments
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Investment Component{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    No direct control over investments{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Can adjust how premiums are allocated to investments
                  </td>
                </tr>
                <tr class="even:bg-gray-50">
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    Cost Comparison{" "}
                  </td>
                  <td class="py-4 px-6 border-b border-r border-halfBlack">
                    More predictable costs with fixed premiums{" "}
                  </td>
                  <td class="py-4 px-6 border-b  border-halfBlack">
                    Costs can vary based on premium and investment performance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholeLifeInfo4;
