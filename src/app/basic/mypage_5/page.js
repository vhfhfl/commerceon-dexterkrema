'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import TabBar_2 from '@/components/common/TabBar_2';
import InquiryForm_2 from '@/components/common/InquiryForm_2';
import InquiryFlexBox_1_b from '@/components/common/InquiryFlexBox_1_b';
import PagingSet_1 from '@/components/common/PagingSet_1';
import TableUi_1_c from '@/components/common/TableUi_1_c';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[93px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <TabBar_2/>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <div className='text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              최근 결제내역
            </div>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner'>
            <InquiryForm_2/>
          </div>
        </section>
        <section className='HBox mt-[52px]'>
          <div className='Inner2'>
            <InquiryFlexBox_1_b/>
          </div>
        </section>
        <section className='HBox mt-[32px]'>
          <div className='Inner'>
            <TableUi_1_c/>
          </div>
        </section>
        <section className='HBox mt-[80px]'>
          <div className='Inner'>
            <PagingSet_1/>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}