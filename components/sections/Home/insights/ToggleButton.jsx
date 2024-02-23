import React from "react";

export default function ToggleButton({ title, desc, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mx-auto flex w-full sm:w-[313px] pt-5 flex-col gap-[10px] ${isActive ? "border-t-[5px] border-[#446D9B]" : ""}`}
    >
      <div className="flex flex-col gap-[10px]">
        <h3 className={`w-full text-center text-stone-950 text-2xl font-semibold`}>
          {title}
        </h3>
        <p className={`w-full text-center text-zinc-600 text-xl font-normal`}>
          {desc}
        </p>
      </div>
    </button>
  );
}
