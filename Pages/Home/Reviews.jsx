import { Star } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import Google from "../../assets/google.png";

const reviews = [
  {
    name: "Alex Dork",
    avatar: avatar,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    rating: 5,
  },
  {
    name: "Peter Winters",
    avatar: avatar,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    rating: 5,
  },
];
const Reviews = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center flex-col gap-[20px]">
      <h2 className="font-bold text-[30px] text-center text-halfBlack">
        PolicyScanner Rated 4.9 on Google Reviews
      </h2>
      <div className="w-full h-max flex justify-center items-center gap-[20px]">
        <div className="w-[17rem] h-max px-[15px] py-[20px] rounded-xl flex justify-between items-center flex-col gap-[10px] bg-primary text-white">
          <h4 className="text-center  font-extrabold tracking-wider text-[35px]">
            4.99/5{" "}
            <span className="text-[16px] font-light tracking-normal">
              Rating
            </span>
          </h4>
          <div className="flex justify-center items-center gap-[3px]">
            <Star className="text-secondary text-[35px]" />
            <Star className="text-secondary text-[35px]" />
            <Star className="text-secondary text-[35px]" />
            <Star className="text-secondary text-[35px]" />
            <Star className="text-secondary text-[35px]" />
          </div>
          <div className="text-center flex justify-center items-center gap-[7px] font-medium text-[16px]">
            <Image src={Google} alt="Google" /> Google reviews
          </div>
          <div className="text-center text-[14px] font-light">
            100% of Our Customer Recommend us
          </div>
          <Link href={"#"}>Read all Reviews</Link>
        </div>

        <div className="flex justify-between items-center gap-[20px]">
          <button className="w-[30px] h-[30px] p-[15px] rounded-full bg-white border border-solid border-halfBlack text-halfBlack flex justify-center items-center">
            <ArrowBackIcon className="text-[18px]" />
          </button>
          <div className="flex justify-center items-center gap-[15px]">
            {reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="w-[13rem] h-max py-[10px] px-[10px] border border-opposite border-sold rounded-lg flex justify-center items-start gap-[10px] flex-col"
                >
                  <div>
                    <Star className="text-secondary text-[20px]" />
                    <Star className="text-secondary text-[20px]" />
                    <Star className="text-secondary text-[20px]" />
                    <Star className="text-secondary text-[20px]" />
                    <Star className="text-secondary text-[20px]" />
                  </div>
                  <div className="text-[13px] text-left font-light">
                    {review.content}
                  </div>
                  <div className="flex justify-start items-center gap-[7px]">
                    <Image
                      src={review.avatar}
                      alt="Profile Picture"
                      width={60}
                      height={60}
                      className="rounded-full w-[40px] h-[40px] object-cover object-center"
                    />{" "}
                    <div className="text-[15px] font-medium">{review.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-[30px] h-[30px] p-[15px] rounded-full bg-halfBlack text-white flex justify-center items-center">
            <ArrowForwardIcon className="text-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
