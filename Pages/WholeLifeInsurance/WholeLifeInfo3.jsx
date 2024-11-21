import React from "react";

const WholeLifeInfo3 = () => {
  return (
    <section className="w-full h-max  bg-foreground2 gap-[3rem] px-[80px] py-[5rem]  flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          How much does whole life insurance cost in Canada?
        </h2>
        <p className="text-dg text-hlafBlack">
          Whole life insurance offers various payment options to suit different
          financial situations and preferences. Understanding these options can
          help you choose the best plan for your needs.
        </p>
        <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
          <h3 className="text-[22px] font-semibold text-halfBlack">
            Regular premium payments{" "}
          </h3>
          <p className="text-dg text-hlafBlack">
            Most whole life insurance policies require regular premium payments.
            These can be made on a monthly, quarterly, semi-annual, or annual
            basis, providing flexibility in how you manage your payments.
          </p>
        </div>
        <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
          <h3 className="text-[22px] font-semibold text-halfBlack">
            Limited pay options{" "}
          </h3>
          <p className="text-dg text-hlafBlack">
            Limited pay whole life insurance allows you to complete all premium
            payments within a specific period, such as 10, 15, or 20 years, or
            by a certain age. After this period, your policy remains active for
            life without any additional payments.
          </p>
        </div>{" "}
        <div className="w-full h-max flex justify-start items-start p-[1rem] rounded-xl border border-solid border-opposite gap-[10px] flex-col">
          <h3 className="text-[22px] font-semibold text-halfBlack">
            Single premium payment{" "}
          </h3>
          <p className="text-dg text-hlafBlack">
            Single premium whole life insurance involves making a one-time lump
            sum payment to fully fund the policy. This option provides immediate
            cash value and a guaranteed death benefit, making it suitable for
            individuals who have a large sum of money to invest upfront.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WholeLifeInfo3;
