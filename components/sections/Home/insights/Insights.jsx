"use client";

import Image from "next/image";
import { tabsData } from "./data";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

export default function Insights() {
  const [activeButton, setActiveButton] = useState(0); // State to keep track of active button

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  return (
    <section className="mt-[60px] md:mt-[100px] lg:mt-[200px]">
      <div className="mx-auto max-w-[1090px]">
        <div className="mx-auto flex h-[185px] max-w-[789px] flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center gap-2.5 rounded-[30px] border bg-slate-100 px-5 py-2.5">
            <h3 className={`text-base font-normal text-stone-950`}>Insights</h3>
          </div>
          <div className="flex h-[126px] flex-col items-center justify-start gap-5">
            <div className="flex items-center justify-center self-stretch">
              <h5
                className={`text-center text-3xl font-semibold text-stone-950 md:text-5xl`}
              >
                You are in control
              </h5>
            </div>
            <div className="flex items-center justify-center gap-2.5 self-stretch">
              <p
                className={`shrink grow basis-0 text-center text-lg font-normal text-zinc-600 md:text-xl`}
              >
                With a charge card, you&apos;re in control. Set limits, get
                real-time insights, and enjoy a personalized financial
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse gap-[60px] md:gap-[100px]">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
            {tabsData.map((tab, index) => (
              <ToggleButton
                key={index}
                title={tab.title}
                desc={tab.desc}
                isActive={activeButton === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>

          <div className="">
            <Image
              src={tabsData[activeButton].data[0].insightsImg}
              width={5000}
              height={5000}
              className="relative w-[1312px] rounded-[10px] sm:h-[500px] md:h-[675px]"
              alt="insights image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
