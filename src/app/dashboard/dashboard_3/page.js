'use client';

import ButtonBox_2 from '@/components/common/ButtonBox_2';
import Cpnt_2 from '@/components/common/Cpnt_2';
import StepBox_1 from '@/components/common/StepBox_1';
import VolBox_2 from '@/components/common/VolBox_2';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <ButtonBox_2/>
      </section>
      <section>
        <StepBox_1/>
        <ButtonBox_2 className={`mt-[24px]`}/>
      </section>
      <section>
        <div className={`WhiteBox CenterCenter gap-[10px]`}>
          {[...Array(4).keys()].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div className={`flex-1`}>
                  <VolBox_2/>
                  <div className={`mt-[16px]`}>
                    <button className={`Button_5 w-full`} disabled={true}>
                      추출 완료
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
      <section>
        <Cpnt_2/>
      </section>
      <section>
        <article className={`CenterCenter`}>
          <button className={`Button_1 Xl w-[245px]`}>Lorem Ipsum</button>
        </article>
      </section>
    </>
  );
}