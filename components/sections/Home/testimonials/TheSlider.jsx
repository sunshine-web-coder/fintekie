"use client";

import Image from "next/image";
import { sliderItems } from "./data";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-95px] left-0 ml-[50px] z-10 md:ml-[180px] flex items-start justify-start gap-2.5 rounded-[144px] bg-slate-100 p-2 md:p-5"
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="u:arrow-right">
          <path
            id="Vector"
            d="M8.60667 16.5779C8.67013 16.7415 8.76528 16.8911 8.88667 17.0179L15.5533 23.6845C15.6777 23.8089 15.8252 23.9075 15.9877 23.9748C16.1501 24.042 16.3242 24.0767 16.5 24.0767C16.8551 24.0767 17.1956 23.9356 17.4467 23.6845C17.571 23.5602 17.6696 23.4126 17.7369 23.2502C17.8042 23.0878 17.8388 22.9137 17.8388 22.7379C17.8388 22.3828 17.6977 22.0423 17.4467 21.7912L13.0467 17.4045L23.1667 17.4045C23.5203 17.4045 23.8594 17.2641 24.1095 17.014C24.3595 16.764 24.5 16.4248 24.5 16.0712C24.5 15.7176 24.3595 15.3784 24.1095 15.1284C23.8594 14.8783 23.5203 14.7379 23.1667 14.7379L13.0467 14.7379L17.4467 10.3512C17.5716 10.2273 17.6708 10.0798 17.7385 9.91731C17.8062 9.75483 17.8411 9.58055 17.8411 9.40454C17.8411 9.22852 17.8062 9.05425 17.7385 8.89177C17.6708 8.72929 17.5716 8.58182 17.4467 8.45787C17.3227 8.3329 17.1752 8.23371 17.0128 8.16602C16.8503 8.09832 16.676 8.06347 16.5 8.06347C16.324 8.06347 16.1497 8.09832 15.9872 8.16602C15.8248 8.23371 15.6773 8.3329 15.5533 8.45787L8.88667 15.1245C8.76528 15.2513 8.67013 15.4009 8.60667 15.5645C8.47331 15.8892 8.47331 16.2533 8.60667 16.5779Z"
            fill="#101010"
          />
        </g>
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[-95px] right-0 z-10 mr-[50px] md:mr-[180px] flex rotate-180 items-start justify-start gap-2.5 rounded-[144px] bg-slate-100 p-2 md:p-5"
    >
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="u:arrow-right">
          <path
            id="Vector"
            d="M8.60667 16.5779C8.67013 16.7415 8.76528 16.8911 8.88667 17.0179L15.5533 23.6845C15.6777 23.8089 15.8252 23.9075 15.9877 23.9748C16.1501 24.042 16.3242 24.0767 16.5 24.0767C16.8551 24.0767 17.1956 23.9356 17.4467 23.6845C17.571 23.5602 17.6696 23.4126 17.7369 23.2502C17.8042 23.0878 17.8388 22.9137 17.8388 22.7379C17.8388 22.3828 17.6977 22.0423 17.4467 21.7912L13.0467 17.4045L23.1667 17.4045C23.5203 17.4045 23.8594 17.2641 24.1095 17.014C24.3595 16.764 24.5 16.4248 24.5 16.0712C24.5 15.7176 24.3595 15.3784 24.1095 15.1284C23.8594 14.8783 23.5203 14.7379 23.1667 14.7379L13.0467 14.7379L17.4467 10.3512C17.5716 10.2273 17.6708 10.0798 17.7385 9.91731C17.8062 9.75483 17.8411 9.58055 17.8411 9.40454C17.8411 9.22852 17.8062 9.05425 17.7385 8.89177C17.6708 8.72929 17.5716 8.58182 17.4467 8.45787C17.3227 8.3329 17.1752 8.23371 17.0128 8.16602C16.8503 8.09832 16.676 8.06347 16.5 8.06347C16.324 8.06347 16.1497 8.09832 15.9872 8.16602C15.8248 8.23371 15.6773 8.3329 15.5533 8.45787L8.88667 15.1245C8.76528 15.2513 8.67013 15.4009 8.60667 15.5645C8.47331 15.8892 8.47331 16.2533 8.60667 16.5779Z"
            fill="#101010"
          />
        </g>
      </svg>
    </button>
  );
}

export default function TheSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mx-auto max-w-[500px] md:max-w-max">
      <Slider {...settings}>
        {sliderItems.map((user, i) => (
          <div key={i} className="flex flex-col items-center justify-start">
            <div className="flex items-center justify-center gap-2.5">
              <p
                className={`mx-auto max-w-[757px] text-center text-xl font-semibold text-stone-950 md:text-2xl`}
              >
                “{user.quote}”
              </p>
            </div>
            <div className="mt-5 flex flex-col items-center justify-start gap-2.5">
              <Image
                width={60}
                height={60}
                className="h-[60px] w-[60px] rounded-full"
                src={user.avatar}
                alt="avatar"
              />
              <div className="flex flex-col items-center justify-start gap-1">
                <span
                  className={`text-center text-base font-semibold text-stone-950`}
                >
                  {user.name}
                </span>
                <span
                  className={`text-center text-base font-light text-stone-950`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
