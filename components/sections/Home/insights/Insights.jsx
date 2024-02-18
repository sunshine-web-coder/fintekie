import insightsImg from "../../../../assets/insight_img.png";
import Image from "next/image";
import { tab1Content } from "./data";

export default function Insights() {
  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="h-[960px mx-auto max-w-[1090px]">
        <div className="mx-auto flex h-[185px] max-w-[789px] flex-col items-center justify-start gap-5">
          <div className="flex items-center justify-center gap-2.5 rounded-[30px] border bg-slate-100 px-5 py-2.5">
            <h3 className={`text-base font-normal text-stone-950`}>
              Insights
            </h3>
          </div>
          <div className="flex h-[126px] flex-col items-center justify-start gap-5">
            <div className="flex items-center justify-center self-stretch">
              <h5 className={`text-3xl md:text-5xl text-center font-semibold text-stone-950`}>
                You are in control
              </h5>
            </div>
            <div className="flex items-center justify-center gap-2.5 self-stretch">
              <p className={`shrink grow basis-0 text-center text-lg md:text-xl font-normal text-zinc-600`}>
                With a charge card, you&apos;re in control. Set limits, get
                real-time insights, and enjoy a personalized financial
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[64px] md:mt-[100px]">
          <Image
            src={insightsImg}
            width={5000}
            height={5000}
            className="relative sm:h-[500px] md:h-[675px] w-[1312px] rounded-[10px]"
            alt="insights image"
          />
        </div>
        <div className="mt-[64px] md:mt-[100px]">
          <div className="h-[5px] w-full bg-zinc-300 mb-5">
            <div className="h-[5px] w-[363.33px] bg-slate-500" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-between">
            {tab1Content.map((data) => (
                <div key={data.title} className="mx-auto max-w-[313px] md:w-[313px] flex flex-col gap-[10px]">
                    <h5 className={`w-full text-center text-stone-950 text-2xl font-semibold`}>{data.title}</h5>
                    <p className={`w-full text-center text-zinc-600 text-xl font-normal`}>{data.desc}</p>
                </div>
            ))}            
          </div>
        </div>
      </div>
    </section>
  );
}
