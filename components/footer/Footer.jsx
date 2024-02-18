import React from "react";
import { footerLink } from "./data";

export default function Footer() {
  return (
    <footer className="px-[16px] lg:px-[112px]">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1216px] gap-[32px] py-[32px] md:py-[64px]">
        <div className="w-[369px]">
          <div className={`mb-[32px] flex items-center gap-[2px] text-2xl font-semibold text-stone-950`}>
            <svg
              width="36"
              height="47"
              viewBox="0 0 36 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_333_6848)">
                <rect
                  width="26.0292"
                  height="40.903"
                  transform="translate(0.5 6.5166) rotate(-14.337)"
                  fill="#333333"
                />
                <rect
                  x="11.3535"
                  y="-5.85254"
                  width="3.18308"
                  height="40.903"
                  transform="rotate(16.5787 11.3535 -5.85254)"
                  fill="#818181"
                />
                <rect
                  x="15.4165"
                  y="-4.97168"
                  width="5.28106"
                  height="45.5016"
                  transform="rotate(16.5787 15.4165 -4.97168)"
                  fill="#818181"
                />
                <rect
                  x="26.7998"
                  y="34.3364"
                  width="5.57768"
                  height="5.57768"
                  transform="rotate(-14.337 26.7998 34.3364)"
                  fill="#FFA200"
                />
              </g>
              <defs>
                <clipPath id="clip0_333_6848">
                  <rect
                    width="26.0292"
                    height="40.903"
                    fill="white"
                    transform="translate(0.5 6.5166) rotate(-14.337)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Fintekie</span>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="text-[16px] text-[#344054] w-[312px]">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="flex items-center justify-start sm:justify-between gap-2">
              <input
                type="text"
                placeholder="Email address"
                className="W-[238px] h-[49px] rounded-[6px] border p-3"
              />
              <button className="h-[49px] w-[100px] sm:w-[136px] rounded-[10px] bg-[#446D9B] text-[16px] text-[#F7F7F7]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-[32px]">
          {footerLink.map((section, index) => (
            <div key={index} className="mb-4 w-full text-zinc-800">
              <h2
                className={`mb-[24px] self-stretch text-xl font-normal leading-[29px] text-zinc-800`}
              >
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.children.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    <a
                      href={item.slug}
                      className={`self-stretch text-base font-medium leading-normal`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
