'use client';
import BlankBox from '@/components/etc/BlankBox';

export default function VolBox_1({ className }) {
  return (
    <>
      <div
        className={`${className} rounded-[12px] border-solid border-[1px] border-[#E0DFEA] overflow-hidden`}
      >
        <div className={`bg-[#F0EFF6] p-[12px]`}>
          <article className={`CenterCenter`}>
            <div
              className={`w-[20px] aspect-square bg-[#5D45FF] rounded-[4px]`}
            ></div>
            <article
              className={`ml-[6px] CenterLeft text-[#26262C] text-[16px] font-[600] leading-[16px]`}
            >
              <div>Text 1</div>
              <div className={`mx-[6px] w-[1px] h-[14px] bg-[#CFCEDC]`}></div>
              <div>Text 2</div>
            </article>
          </article>
          <div
            className={`text-center mt-[10px] text-[#3D3C42] text-[14px] font-[400] leading-[14px]`}
          >
            볼륨량 / %
          </div>
        </div>
        <div className={`p-[16px]`}>
          <BlankBox className={`h-[420px]`}>Chart Area</BlankBox>
          <div className={`mt-[16px]`}>
            <button className={`Button_4 w-full`}>인사이드 추출</button>
          </div>
        </div>
      </div>
    </>
  );
}
