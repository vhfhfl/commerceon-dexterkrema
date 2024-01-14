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
          <WhiteBoxTitle_1>원하는 배경 조건 설정</WhiteBoxTitle_1>
          <div className={`mt-[24px] rounded-[12px] bg-[#F0EFF6] p-[16px] space-y-[16px]`}>
            {[...Array(5).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <article className={`CenterLeft gap-[8px]`}>
                    <div className={`Fc w-[120px]`}>
                      <div>Lorem Ipsum</div>
                    </div>
                    <div className={`Fc flex-1`}>
                      <div className={`TextInput_1 w-full`}>
                        <input placeholder={`ex) placeholder`}/>
                      </div>
                    </div>
                  </article>
                </Fragment>
              );
            })}
          </div>
        </div>
        <article className={`mt-[15px]`}>
          <button className={`Button_5 Lg w-full`} disabled={true}>
            이미지 생성하기
          </button>
        </article>
        <article className={`mt-[40px] CenterCenter`}>
          <button className={`Button_3 Xl w-[245px]`}>이전 단계로 이동</button>
        </article>
      </section>
    </>
  );
}