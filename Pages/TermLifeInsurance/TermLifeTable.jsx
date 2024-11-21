import React from "react";

const TermLifeTable = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pb-[3rem] pt-[2rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          Monthly term life insurance Cost
        </h2>
        <div className="w-full h-max border border-solid relative mt-[1rem]  overflow-hidden border-halfBlack rounded-xl">
          <table class="w-full h-full text-center border-collapse">
            <thead class="bg-gray-100 rounded-t-xl text-left">
              <tr className="bg-primary text-white">
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Age{" "}
                </th>
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  10-Year Term{" "}
                </th>
                <th class="py-4 px-6 border-b  border-halfBlack">
                  20-Year Term{" "}
                </th>
                <th class="py-4 px-6 border-b  border-halfBlack">
                  30-Year Term{" "}
                </th>
              </tr>
            </thead>
            <tbody class="rounded-b-xl text-left">
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  20-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $15.58{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $19.47{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$23.36 </td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  25-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $22.22{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $27.78{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$33.34</td>
              </tr>{" "}
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  30-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $27.80{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $34.75{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$41.70 </td>
              </tr>{" "}
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  35-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $29.92{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $37.40{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$44.88 </td>
              </tr>{" "}
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  45-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $51.60{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $64.50{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$77.40 </td>
              </tr>{" "}
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  55-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $151.20{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $189.00{" "}
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack"> $226.80 </td>
              </tr>{" "}
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  65-year-old{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $481.20{" "}
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $601.50
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack"> $721.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TermLifeTable;
