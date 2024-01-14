'use client';

import SizeSelect_1 from '@/components/common/SizeSelect_1';
import StepBox_1 from '@/components/common/StepBox_1';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1/>
        <article className={`mt-[28px] flex flex-row gap-[22px]`}>
          <div className={`Fc flex-1`}>
            <SizeSelect_1/>
          </div>
          <div className={`Fc flex-1`}>
            <SizeSelect_1/>
          </div>
        </article>
        <article className={`mt-[40px] CenterCenter`}>
          <button className={`Button_1 Xl w-[245px]`}>
            <div>다음단계로 이동</div>
            <div className={`text-[#9FAFFF] text-[14px] font-[400] leading-[14px]`}>
              사이즈 선택 2개
            </div>
          </button>
        </article>
      </section>
    </>
  );
}