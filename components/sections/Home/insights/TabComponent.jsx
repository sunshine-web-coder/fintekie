"use client"

import React, { useState } from "react";
import { tabsData } from "./data";
import Image from "next/image";

// const tabs = ['Crossover & SUVs', 'Cars', 'Hybrid', 'Electric', 'Sport Cars'];
export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(tabsData[0].title);

  return (
    <div className="w-full flex flex-col-reverse">
      <div className="flex flex-wrap gap-y-[20px] gap-[40px]">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`pb-2 block self-stretch text-xl font-semibold text-neutral-800 ${
              activeTab === tab.title ? 'border-b-[3px] border-[#202020]' : ''
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
            {tab.desc}
          </button>
        ))}
      </div>
      <div className="py-8">
        {/* Render content based on active tab */}
        {tabsData.map((tab, index) => (
          <div key={index} className={activeTab === tab.title ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
              {tab.data.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center justify-between self-stretch">
                <div className="flex flex-col items-start justify-start gap-2.5">
                  <Image
                    src={item.imageUrl}
                    width={316.86}
                    height={151.70}
                    className="h-[151.70px] w-[316.86px]"
                    alt={item.name}
                  />
                  <div className="flex flex-col items-start justify-start gap-2.5">
                    <div className="text-2xl font-bold text-neutral-800">
                      {item.name}
                    </div>
                    <div className="text-base font-normal text-neutral-800">
                      {item.price}
                    </div>
                    <div className="text-base font-normal text-neutral-800">
                      {item.msrp}
                    </div>
                  </div>
                </div>
                {/* Repeat this container for other data items */}
              </div>
            ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
