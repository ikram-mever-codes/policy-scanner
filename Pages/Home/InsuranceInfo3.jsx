import React from "react";

const InsuranceInfo3 = () => {
  return (
    <section className="w-full h-max bg-white px-[80px] py-[5rem] gap-[2.5rem] flex justify-start items-center flex-col">
      <div className="w-[75%] flex justify-start items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How much does life insurance cost in Canada?
        </h2>
        <p>
          The cost of life insurance in Canada varies based on several key
          factors such as age, smoking status, and the amount of coverage.
          Generally, term life insurance is the most affordable option, making
          it a popular choice for those seeking cost-effective coverage.
        </p>
      </div>
      <div className="w-[75%] flex justify-start items-center flex-col gap-[2rem]">
        <h3 className="w-full font-semibold text-[20px] text-left text-halfBlack">
          Average monthly premiums for direct term life insurance in Canada
        </h3>
        <div className="w-full h-max border border-solid relative  overflow-hidden border-halfBlack rounded-xl">
          <table class="w-full h-full text-center border-collapse">
            <thead class="bg-gray-100 rounded-t-xl">
              <tr className="bg-primary text-white">
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Age Group
                </th>
                <th class="py-4 px-6 border-b border-r border-halfBlack">
                  Coverage Amount
                </th>
                <th class="py-4 px-6 border-b  border-halfBlack">
                  Average Monthly Premium
                </th>
              </tr>
            </thead>
            <tbody class="rounded-b-xl">
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  25-35 Years
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $500,000
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$15-$25</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  35-45 Years
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $500,000
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$25-$35</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  45-55 Years
                </td>
                <td class="py-4 px-6 border-b border-r border-halfBlack">
                  $500,000
                </td>
                <td class="py-4 px-6 border-b  border-halfBlack">$35-$50</td>
              </tr>
              <tr class="even:bg-gray-50">
                <td class="py-4 px-6  border-r border-halfBlack">55+ Years</td>
                <td class="py-4 px-6  border-r border-halfBlack">$500,000</td>
                <td class="py-4 px-6   border-halfBlack">$50-$75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[75%] flex justify-start items-center flex-col gap-[1rem]">
        <h3 className="w-full font-semibold text-[20px] text-left text-halfBlack">
          Factors affecting life Insurance quotes
        </h3>
        <ul className="custom-list-bullets flex justify-start items-center flex-col gap-[2rem] text-[16px]">
          <li>
            Life insurance quotes in Canada are influenced by an individual's
            health and lifestyle. For instance, a healthy individual in their
            30s could expect to pay between $25-$30 monthly for a direct term
            life insurance policy. However, premiums can increase significantly
            if the individual has health issues, potentially doubling the cost
          </li>
          <li>
            Full life insurance and life insurance for seniors in Canada
            generally come with higher premiums compared to term life insurance.
            Those looking for policies without medical exams can opt for no
            medical life insurance, which typically has higher premiums due to
            the increased risk for insurers
          </li>
          <li>
            Whole life or permanent life insurance policies are more expensive
            but offer lifelong coverage and cash value accumulation, making them
            suitable for long-term security and potential savings growth. For
            example, a healthy 35-year-old might pay around $100 per month for a
            whole life insurance policy
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InsuranceInfo3;
