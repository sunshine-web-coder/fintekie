"use client";

import Link from "next/link";
import React, { useState } from "react";
import { accordionItems } from "./data";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-[100px] lg:mt-[200px]">
      <div className="mx-auto max-w-[868px]">
        <div className="mx-auto flex max-w-[789px] flex-col gap-[10px]">
          <h5 className={`text-center text-3xl font-semibold md:text-5xl`}>
            Frequently asked questions
          </h5>
          <p className={`text-center text-lg font-normal md:text-xl`}>
            Find quick answers to common queries in our Frequently Asked
            Questions section. Your key to instant clarity on all things related
            to our charge card
          </p>
        </div>
        <div className="mx-auto mt-[60px] w-full">
          {accordionItems.map((item, index) => (
            <div key={index} className="mb-[20px] rounded">
              <div
                className="flex cursor-pointer items-center justify-between border-b min-h-[32px]"
                onClick={() => handleToggle(index)}
              >
                <p className="text-xl max-w-[300px] sm:max-w-max ">{item.title}</p>
                <span>
                  {openIndex === index ? (
                    <svg
                      width="18"
                      height="11"
                      viewBox="0 0 18 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0664 10.4711L17.5331 2.87109C18.0664 2.33776 18.0664 1.53776 17.5331 1.00443C16.9997 0.471092 16.1997 0.471092 15.6664 1.00443L8.99974 7.53776L2.33307 1.00443C1.79974 0.471092 0.999739 0.471092 0.466406 1.00443C0.199739 1.27109 0.0664062 1.53776 0.0664062 1.93776C0.0664062 2.33776 0.199739 2.60443 0.466406 2.87109L7.93307 10.4711C8.59974 11.0044 9.39974 11.0044 10.0664 10.4711C9.93307 10.4711 9.93307 10.4711 10.0664 10.4711Z"
                        fill="#101010"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      className="rotate-180"
                      height="11"
                      viewBox="0 0 18 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0664 10.4711L17.5331 2.87109C18.0664 2.33776 18.0664 1.53776 17.5331 1.00443C16.9997 0.471092 16.1997 0.471092 15.6664 1.00443L8.99974 7.53776L2.33307 1.00443C1.79974 0.471092 0.999739 0.471092 0.466406 1.00443C0.199739 1.27109 0.0664062 1.53776 0.0664062 1.93776C0.0664062 2.33776 0.199739 2.60443 0.466406 2.87109L7.93307 10.4711C8.59974 11.0044 9.39974 11.0044 10.0664 10.4711C9.93307 10.4711 9.93307 10.4711 10.0664 10.4711Z"
                        fill="#101010"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <div className="pl-0 pb-0 p-4">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[60px] flex max-w-[425px] flex-col items-center justify-center gap-5">
          <h3 className={`text-center text-2xl font-semibold md:text-[32px]`}>
            Still have a question?
          </h3>
          <p className={`text-center text-lg md:text-xl`}>
            Go ahead and reach out to us if you have more questions
          </p>
          <Link
            href=""
            className={`flex h-[49px] w-[143px] items-center justify-between rounded-[10px] bg-[#446D9B] text-center text-[16px] text-[#F7F7F7]`}
          >
            <span className="w-full">Contact us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
