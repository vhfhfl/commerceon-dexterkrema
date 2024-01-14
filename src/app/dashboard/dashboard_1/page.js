'use client';

import ButtonBox_1 from '@/components/common/ButtonBox_1';
import Cpnt_1 from '@/components/common/Cpnt_1';
import Cpnt_2 from '@/components/common/Cpnt_2';
import StepBox_1 from '@/components/common/StepBox_1';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <section>
        <ButtonBox_1/>
      </section>
      <section>
        <StepBox_1/>
        <ButtonBox_1 className={`mt-[24px]`}/>
      </section>
      <section>
        <Cpnt_1/>
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