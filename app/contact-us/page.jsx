import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen h-max flex justify-start  gap-[2rem] items-center flex-col ">
      <h1 className="w-full text-center font-semibold text-[28px] text-halfBlack">
        Contact Us
      </h1>
      <div className="w-[80vw] h-[85vh] bg-[#e8fefe]  rounded-2xl overflow-hidden flex justify-between items-center">
        <div className="w-[50%] h-full bg-[url('/contact-1.png')] bg-contain bg-no-repeat bg-center bg-primary"></div>
        <div className="w-[50%] h-full p-10">
          <form className="space-y-4 flex justify-space-between items-start w-full h-full gap-[1rem] flex-col">
            <div className="flex gap-4 w-full">
              <div className="w-1/2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1  bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3  bg-transparent py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border  bg-transparent border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
