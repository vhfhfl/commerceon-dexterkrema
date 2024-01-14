'use client';

import { pageScroll } from '@/js/common';

export default function BottomRightUtil_1() {
  return (
    <>
      <div
        id="BottomRightUtil"
        className={`z-[99] fixed bottom-[88px] right-[60px]`}
      >
        <div className="flex flex-col gap-[10px]">
          <a href="#">
            <img src="/icon/2312121143.svg" alt="" />
          </a>
          <button
            className="mx-auto ScrollTopBtn bg-[#5D45FF] w-[40px] aspect-square rounded-full text-white text-[12px] font-[800]"
            onClick={pageScroll.Top}
          >
            <img src="/icon/2312121139.svg" alt="" />
          </button>
          {/*
          <button className="ScrollTopBtn bg-[#5D45FF] w-[40px] aspect-square rounded-full text-white text-[12px] font-[800]" onClick={pageScroll.Bottom}>
            BTM
          </button>
          */}
        </div>
      </div>
    </>
  );
}
