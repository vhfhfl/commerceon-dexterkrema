'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_6 from '@/components/swiper/Swiper_6';
import TabBar_2 from '@/components/common/TabBar_2';
import InquiryForm_1 from '@/components/common/InquiryForm_1';
import TableUi_1_a from '@/components/common/TableUi_1_a';
import PagingSet_1 from '@/components/common/PagingSet_1';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[140px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <TabBar_2/>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <div className='text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              1:1 문의내역
            </div>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <InquiryForm_1/>
          </div>
        </section>
        <section className='HBox mt-[40px]'>
          <div className='Inner'>
            <TableUi_1_a/>
          </div>
        </section>
        <section className='HBox mt-[40px]'>
          <div className='Inner CenterCenter'>
            <button className='Button_1 Xl w-[245px]'>1:1 문의하기</button>
          </div>
        </section>
        <section className='HBox mt-[80px]'>
          <div className='Inner'>
            <PagingSet_1/>
          </div>
        </section>
        <section className='HBox mt-[179px]'>
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