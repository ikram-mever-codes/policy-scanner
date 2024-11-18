import React from "react";

const MortgageInfo5 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pt-[1rem] py-[3rem] flex justify-center items-center flex-col">
      <div className="w-[75%] h-full flex justify-center text-halfBlack items-center flex-col gap-[1rem]">
        <h2 className="w-full font-bold text-[28px] text-left text-halfBlack">
          Is Mortgage Protection Insurance Mandatory in Canada?{" "}
        </h2>
        <p>
          Mortgage insurance, or mortgage protection insurance, is not mandatory
          in Canada. However, it is highly recommended, as it can help reduce
          the burden of mortgage payments for your loved ones if something
          unexpected happens to you.
        </p>
        <h3 className="text-[19px] font-semibold w-full text-left">
          Choosing Between Mortgage Insurance and Mortgage Protection Insurance
        </h3>
        <div className="w-full h-max flex justify-start items-start gap-[2rem] flex-col ">
          <div className="w-full flex justify-start items-start border-b border-solid border-gray">
            <button className="w-max px-[10px] h-[3rem] border-b-2 border-solid border-primary">
              Mortgage Protection Insurance
            </button>
            <button className="w-max px-[20px] h-[3rem] ">
              Mortgage Insurance
            </button>
          </div>
          <div className="w-full h-max flex justify-start items-start flex-col gap-[2rem]">
            <div className="w-full flex justify-start items-start gap-[4rem]">
              <div className="font-semibold text-[17px]">Purpose</div>
              <div>
                Mortgage protection insurance is designed to help your family
                pay off the mortgage in the event of your death. The payment is
                made directly to your family, ensuring they have total control
                over the funds.
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-[4rem]">
              <div className="font-semibold text-[17px]">
                Cost&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;
              </div>
              <div>
                Mortgage protection insurance is often more affordable than
                traditional lender-provided mortgage insurance, and the premiums
                remain fixed over the term of the policy, allowing for proper
                budget planning.
              </div>
            </div>{" "}
            <div className="w-full flex justify-start items-start gap-[2rem]">
              <div className="font-semibold text-[17px]">
                Coverage Flexibility:
              </div>
              <div>
                Mortgage protection insurance offers flexibility to include
                add-ons such as disability protection and critical illness
                coverage. This ensures broader protection, not only for your
                mortgage but also against other financial risks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageInfo5;
