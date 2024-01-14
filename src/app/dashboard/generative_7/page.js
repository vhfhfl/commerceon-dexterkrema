'use client';

import StepBox_1 from '@/components/common/StepBox_1';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1/>
      </section>
      <section>
        <div className={`WhiteBox`}>
          <WhiteBoxTitle_1>이미지 다운로드</WhiteBoxTitle_1>
          <div className={`mt-[28px] rounded-[12px] bg-[#F0EFF6] p-[16px]`}>
            <div className={`bg-[#E5E4EF] rounded-[12px] px-[24px]`}>
              <article className={`CenterBetween`}>
                <div>
                  <img src={`/icon/2312171421.svg`} alt={``}/>
                </div>
                <div>
                  <img className={`mx-auto rounded-[12px]`} src={`https://gifpng.com/520x520`} alt={``}/>
                </div>
                <div>
                  <img src={`/icon/2312171422_on.svg`} alt={``}/>
                </div>
              </article>
            </div>
          </div>
          <div className={`mt-[24px] bg-[#F0EFF6] p-[16px] rounded-[12px] text-center`}>
            <WhiteBoxTitle_1>Post Size</WhiteBoxTitle_1>
            <div className={`mt-[16px] text-[#8C8A9A] text-[16px] font-[400] leading-[16px]`}>
              1080 * 1080
            </div>
          </div>
          <article className={`mt-[24px]`}>
            <button className={`Button_4 Lg w-full`}>이미지 재편집</button>
          </article>
        </div>
      </section>
      <section>
        <article className={`mt-[40px] CenterCenter gap-[10px]`}>
          <button className={`Button_3 Xl w-[245px]`}>처음으로 이동</button>
          <button className={`Button_1 Xl w-[245px]`}>이미지 다운로드</button>
        </article>
      </section>
    </>
  );
}