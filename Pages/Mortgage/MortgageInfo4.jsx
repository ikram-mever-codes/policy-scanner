import React from "react";

const MortgageInfo4 = () => {
  return (
    <section className="w-full h-max  bg-white gap-[3rem] px-[80px] pb-[0px] pt-0 flex justify-center items-center flex-col">
      <div className="w-[1140px] h-full flex justify-center text-halfBlack items-center flex-col gap-[2rem]">
        <h2 className="w-full font-bold text-[35px] text-left text-halfBlack">
          What are the Pros and Cons of Mortgage Protection Insurance?
        </h2>
        <div className="w-full h-max flex justify-start items-start flex-col gap-6">
          <h3 className="font-semibold text-halfBlack text-[19px]">
            Pros of mortgage protection:
          </h3>
          <div className="w-full flex justify-start items-start flex-col gap-[15px]">
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">Mortgage insurance</h4>
              <p className="text-halfBlack text-dg">
                Offered by banks, lender-provided mortgage insurance is designed
                to cover only the outstanding mortgage balance. This ensures the
                mortgage is paid off and protects the lender, but your loved
                ones have no control over the payout.
              </p>
            </div>
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">Simplified Approval</h4>
              <p className="text-halfBlack text-dg">
                Often easier to qualify for than traditional life insurance,
                sometimes without a medical exam.
              </p>
            </div>
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">Peace of Mind</h4>
              <p className="text-halfBlack text-dg">
                Provides assurance that your loved ones won't face the burden of
                mortgage payments during difficult times.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-max flex justify-start items-start flex-col gap-6">
          <h3 className="font-semibold text-[19px]">
            Cons of mortgage protection:{" "}
          </h3>
          <div className="w-full flex justify-start items-start flex-col gap-[15px]">
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">Declining Coverage</h4>
              <p className="text-halfBlack text-dg">
                The payout decreases as you pay down your mortgage, but premiums
                may remain the same.
              </p>
            </div>
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">Limited Flexibility</h4>
              <p className="text-halfBlack text-dg">
                Benefits are paid directly to the lender, not to your
                beneficiaries for other expenses.
              </p>
            </div>
            <div className="w-full h-max p-4 py-4 flex gap-1 rounded-lg border-solid border-opposite border justify-start items-start flex-col">
              <h4 className="font-semibold text-[17px]">
                Potentially Higher Cost
              </h4>
              <p className="text-halfBlack text-dg">
                Can be more expensive compared to alternatives like term life
                insurance offering similar coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageInfo4;
