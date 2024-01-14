'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Breadcrumb_1 from '@/components/common/Breadcrumb_1';
import DescBox_3 from '@/components/common/DescBox_3';
import TermsBox_1 from '@/components/common/TermsBox_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import TableUi_2_d from '@/components/common/TableUi_2_d';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[140px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <Breadcrumb_1/>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <div className='text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              1:1 문의하기
            </div>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <DescBox_3/>
          </div>
        </section>
        <section className='HBox mt-[36px]'>
          <div className='Inner'>
            <TableUi_2_d/>
          </div>
        </section>
        <section className='HBox mt-[68px]'>
          <div className='Inner'>
            <div className='text-[#26262c] text-[18px] font-[700]'>
              비회원 개인정보 수집 동의
            </div>
            <div className='mt-[40px]'>
              <TermsBox_1/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[72px]'>
          <div className='Inner'>
            <article className='CenterCenter gap-[10px]'>
              <div>
                <button className='Button_2 Xl w-[245px]'>문의삭제</button>
              </div>
              <div>
                <button className='Button_3 Xl w-[245px]'>목록으로</button>
              </div>
              <div>
                <button className='Button_1 Xl w-[245px]'>문의수정</button>
              </div>
            </article>
          </div>
        </section>
        <section className='HBox mt-[265px]'>
          <div className='Inner'>
            <div className='mx-[-60px]'>
              <Swiper_6/>
            </div>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}