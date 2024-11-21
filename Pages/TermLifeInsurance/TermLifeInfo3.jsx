import React from "react";

const TermLifeInfo3 = () => {
  return (
    <section className="w-full h-max  bg-foreground2 gap-[3rem] px-[80px] py-[5rem] flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center items-center flex-col gap-[3rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What are the factors that affect the term insurance premium?
        </h2>
        <div className="w-full flex justify-start items-start flex-col gap-[2rem]">
          <div className="w-full h-[120px] rounded-xl flex justify-center p-4 border border-solid border-opposite items-center flex-col gap-[10px]">
            <h4 className="w-full text-left text-[20px] font-semibold">Age:</h4>
            <div className="text-halfBlack w-full text-left">
              The older you are, the more expensive your term life insurance
              premiums will be. So its a good idea to buy term life insurance
              policies early.
            </div>
          </div>
          <div className="w-full h-[120px] rounded-xl flex justify-center p-4 border border-solid border-opposite items-center flex-col gap-[10px]">
            <h4 className="w-full text-left text-[20px] font-semibold">
              Gender:
            </h4>
            <div className="text-halfBlack w-full text-left">
              Statistically, females have a longer life expectancy than males,
              which results in lower term life insurance rates for women.
            </div>
          </div>{" "}
          <div className="w-full h-[120px] rounded-xl flex justify-center p-4 border border-solid border-opposite items-center flex-col gap-[10px]">
            <h4 className="w-full text-left text-[20px] font-semibold">
              Health:
            </h4>
            <div className="text-halfBlack w-full text-left">
              Pre-existing conditions, family medical history, smoking, and
              excessive drinking can increase term insurance costs. Maintaining
              a healthy lifestyle can significantly lower your life insurance
              premiums.
            </div>
          </div>
          <div className="w-full h-[120px] rounded-xl flex justify-center p-4 border border-solid border-opposite items-center flex-col gap-[10px]">
            <h4 className="w-full text-left text-[20px] font-semibold">
              Policy duration:
            </h4>
            <div className="text-halfBlack w-full text-left">
              The length of your term life insurance policy in Canada can also
              impact your premium. Longer-term policies generally have higher
              premiums, as they offer coverage for an extended period with the
              same premium throughout.
            </div>
          </div>{" "}
          <div className="w-full h-[120px] rounded-xl flex justify-center p-4 border border-solid border-opposite items-center flex-col gap-[10px]">
            <h4 className="w-full text-left text-[20px] font-semibold">
              Policy type:
            </h4>
            <div className="text-halfBlack w-full text-left">
              The type of policy also affects insurance premiums. For instance,
              whole life insurance or universal life insurance is generally more
              expensive than term insurance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermLifeInfo3;
