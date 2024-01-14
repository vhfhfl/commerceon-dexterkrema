'use client';
import BlankBox from '@/components/etc/BlankBox';
import { layerControl } from '@/js/common';

export default function LayerPop_1() {
  return (
    <>
      <div className={`w-[800px] p-[26px] bg-white rounded-[24px] shadow-[0px_0px_32px_0px_rgba(20,8,104,0.16)]`}>
        <div className={`border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
          <article className={`bg-[#F0EFF6] text-center p-[12px] rounded-t-[12px]`}>
            <div className={`text-[#26262c] text-[16px] font-[600] leading-[1em]`}>
              카테고리명
            </div>
            <div className={`mt-[10px] text-[#3D3C42] text-[14px] font-[400] leading-[1em]`}>
              볼륨량 / %
            </div>
          </article>
          <article className={`p-[24px_16px]`}>
            <BlankBox className={`h-[600px]`}>Chart Area</BlankBox>
            <article className={`mt-[40px] CenterCenter`}>
              <button className={`Button_3 w-[180px]`} onClick={layerControl.Off}>
                닫기
              </button>
            </article>
          </article>
        </div>
      </div>
    </>
  );
}