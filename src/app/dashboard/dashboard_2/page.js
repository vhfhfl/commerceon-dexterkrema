'use client';

import ButtonBox_1 from '@/components/common/ButtonBox_1';
import ButtonBox_2 from '@/components/common/ButtonBox_2';
import Cpnt_5 from '@/components/common/Cpnt_5';
import StepBox_1 from '@/components/common/StepBox_1';
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
        <Cpnt_5/>
      </section>
      <section>
        <ButtonBox_1/>
      </section>
      <section>
        <article className={`CenterCenter`}>
          <button className={`Button_2 Xl w-[245px]`} disabled={true}>
            Lorem Ipsum
          </button>
        </article>
      </section>
    </>
  );
}