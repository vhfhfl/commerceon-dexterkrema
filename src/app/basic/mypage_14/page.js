'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import TabBar_2 from '@/components/common/TabBar_2';
import TreeMenu_1_b from '@/components/common/TreeMenu_1_b';
import PagingSet_1 from '@/components/common/PagingSet_1';
import Swiper_6 from '@/components/swiper/Swiper_6';

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
          <div className='Inner text-[#26262C] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
            고객분들께 알려드립니다.
          </div>
        </section>
        <section className='HBox mt-[40px]'>
          <div className='Inner'>
            <TreeMenu_1_b/>
          </div>
        </section>
        <section className='HBox mt-[80px]'>
          <div className='Inner'>
            <PagingSet_1/>
          </div>
        </section>
        <section className='HBox mt-[152px]'>
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