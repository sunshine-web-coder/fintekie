import React from "react";
import { cuttingEdgeTechData } from "./data";

export default function CuttingEdgeTechnology() {
  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="inner_section">
        <div className="mx-auto flex h-[126px] max-w-[789px] flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center self-stretch">
            <h5 className={`text-3xl md:text-5xl text-center font-semibold text-stone-950`}>
              Cutting edge technology
            </h5>
          </div>
          
          <div className="flex items-center justify-center gap-2.5 self-stretch">
            <p className={`shrink grow basis-0 text-center text-lg md:text-xl font-normal text-zinc-600`}>
              Discover convenience and rewards in the digital era with adaptive
              spending limits and dynamic rewards.
            </p>
          </div>
        </div>
        <div className="mt-[64px] md:mt-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border rounded-[20px] overflow-hidden">
          {cuttingEdgeTechData.map((data) => (
            <div key={data.title} className="flex w-full flex-col items-start justify-start gap-2.5 border border-b border-neutral-200 px-5 md:px-10 py-[40px] md:py-[60px]">
              <div className="flex flex-col items-start justify-start gap-5 self-stretch">
                <div className="flex items-center justify-center gap-2.5 rounded-[30px] border bg-slate-100 bg-opacity-50 px-5 py-2.5">
                  <h3 className={`text-base font-normal text-stone-950`}>
                    {data.sub}
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
                  <div className="flex items-center justify-center self-stretch">
                    <h5 className={`shrink grow basis-0 text-xl md:text-2xl font-semibold text-stone-950`}>
                      {data.title}
                    </h5>
                  </div>
                  <div className="flex items-center justify-center gap-2.5 self-stretch">
                    <p className={`shrink grow basis-0 text-lg md:text-xl font-normal text-zinc-600`}>
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
