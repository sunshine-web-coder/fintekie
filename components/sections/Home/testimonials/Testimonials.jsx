import TheSlider from "./TheSlider";

export default function Testimonials() {
  return (
    <section className="mt-[100px] md:mt-[200px]">
      <div className="mx-auto min-h-[528px] max-w-[789px]">
        <div className="flex h-[58px] flex-col items-center justify-start gap-5 mb-[64px] md:mb-[100px]">
          <div className="flex items-center justify-center self-stretch">
            <h5 className={`text-3xl md:text-5xl text-center font-semibold text-stone-950`}>
              Don&apos;t take our word for it
            </h5>
          </div>
        </div>
        <TheSlider />
      </div>
    </section>
  );
}
