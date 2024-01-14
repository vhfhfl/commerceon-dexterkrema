'use client';

import Cpnt_3_b from '@/components/common/Cpnt_3_b';
import Cpnt_4_a from '@/components/common/Cpnt_4_a';
import TableUi_2_i from '@/components/common/TableUi_2_i';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[120px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              구독서비스 신청/결제가
              <br/>
              완료되었습니다.
            </div>
            <div className='mt-[28px] text-[#26262c] text-[20px] font-[400] text-center'>
              <span className='text-[#5d45ff] font-[700]'>애드플로러</span>의
              성공적인 마케팅 플랜을 기원합니다.
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[22px] font-[700] text-center'>
              결제정보
            </div>
            <div className='mt-[24px]'>
              <TableUi_2_i/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='p-[40px] border-[1px] border-solid border-[#e0dfea] rounded-[24px]'>
              <Cpnt_3_b/>
              <div className='Divider_2'></div>
              <Cpnt_4_a/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <article className='CenterCenter'>
              <div>
                <button className='Button_1 Xl w-[245px]'>솔루션 이용하기</button>
              </div>
            </article>
          </div>
        </section>
        <section className='HBox mt-[130px]'>
          <div className='Inner2'>
            <Swiper_6/>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}