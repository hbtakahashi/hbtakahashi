import React from "react";

export default function TechStack() {
  return (
    <>
      <section>
        <div className="w-full py-20 px-8 bg-[#161C27]">
          <div className="relative inline-block">
            <h2 className="text-lg text-[#828796] font-medium tracking-widest">
              技術スタック
            </h2>
            <div className="absolute left-0  -bottom-4 h-1 w-20 bg-[#6BDC96]"></div>
          </div>
          <div className="flex py-12 gap-2.5">
            <h3 className=" text-[#DDE2F3] text-xl font-bold tracking-tight">
              Core Tech
            </h3>
            <p className="text-[#C6C6CC] text-sm my-auto tracking-tight font-medium">
              (メインで使用)
            </p>
            <p className="text-[#6BDC96] tracking-wide text-[10px] bg-[#6BDC96]/20 border-[#6BDC96]/30 border py-0.5 px-3 my-auto">
              熟練度：高
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
