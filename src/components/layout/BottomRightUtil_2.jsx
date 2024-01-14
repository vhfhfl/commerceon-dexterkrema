'use client';
import { pageScroll } from '@/js/common';

export default function BottomRightUtil_2() {
  return (
    <>
      <div
        className={`CenterCenter z-[99] fixed bottom-[0] left-[0] w-full p-[14px_20px] duration-300 ease-out will-change-auto translate-y-[100%] [[data-scroll-diretion='down']_&]:translate-y-0`}
      >
        <button
          className="z-10 absolute top-[-40px] translate-y-[-100%] right-[20px] ScrollTopBtn bg-[#5D45FF] w-[40px] aspect-square rounded-full text-white text-[12px] font-[800]"
          onClick={pageScroll.Top}
        >
          <img src="/icon/2312121139.svg" alt="" />
        </button>
        <button
          className={`CenterCenter w-full p-[18px_24px] bg-[#5D45FF] rounded-[14px] text-[#fff] text-[16px] font-[600]`}
        >
          서비스 문의하기
        </button>
      </div>
    </>
  );
}
