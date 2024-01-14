'use client';

import Cpnt_6 from '@/components/common/Cpnt_6';
import StepBox_1 from '@/components/common/StepBox_1';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <StepBox_1/>
        <div className={`mt-[24px] WhiteBox`}>
          <WhiteBoxTitle_1>타켓 페르소나 생성</WhiteBoxTitle_1>
          <div className={`mt-[24px] text-[#A3A1B1] text-[14px] font-[500]`}>
            각 단계별, 통합 페르소나를 통해 우리의 타겟을 발굴하세요
          </div>
          <div className={`mt-[40px] border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
            <div className={`CenterLeft p-[20px_24px]`}>
              <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                페르소나
              </div>
            </div>
            <div className={`border-t-[1px] border-t-[#E0DFEA] p-[24px]`}>
              <article className={`CenterCenter gap-[10px]`}>
                {[...Array(4).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className={`flex-1`}>
                        <button className={`${idx == 0 ? 'On' : ''} TabButton_1 w-full`}>
                          <div className={`CenterCenter text-[16px] font-[600] leading-[1em]`}>
                            <div>Text1</div>
                            <div className={`w-[1px] h-[14px] bg-[#A3A1B1] mx-[6px]`}></div>
                            <div>Text2</div>
                          </div>
                          <div className={`mt-[6px] text-[14px] font-[400] leading-[1em]`}>
                            볼륨량 / %
                          </div>
                        </button>
                      </div>
                    </Fragment>
                  );
                })}
              </article>
              <Cpnt_6 className={`mt-[40px]`}/>
            </div>
          </div>
          <div className={`mt-[24px] border-solid border-[1px] border-[#E0DFEA] rounded-[12px]`}>
            <div className={`CenterLeft p-[20px_24px]`}>
              <div className={`text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                통합 페르소나
              </div>
            </div>
            <div className={`border-t-[1px] border-t-[#E0DFEA] p-[16px]`}>
              <Cpnt_6/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <article className={`CenterCenter`}>
          <button className={`Button_1 Xl w-[245px]`}>Lorem Ipsum</button>
        </article>
      </section>
    </>
  );
}