'use client';

import DescList_4 from '@/components/common/DescList_4';
import TabBar_2 from '@/components/common/TabBar_2';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import Swiper_7 from '@/components/swiper/Swiper_7';
import Data_2312211414 from '@/dummy/Data_2312211414';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <Header_1/>
      <main className='pb-[169px]'>
        <section className='HBox mt-[60px]'>
          <div className='Inner'>
            <TabBar_2/>
          </div>
        </section>
        <section className='HBox mt-[44px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              결제정보 관리
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>
              등록된 카드 <span className='text-[#5d45ff]'>2</span>건
            </div>
            <div className='mt-[28px] ShadowBox_1'>
              <Swiper_7/>
            </div>
            <div className='mt-[28px] CenterCenter'>
              <div>
                <button className='Button_1 Xl w-[245px]'>카드 변경사항 저장</button>
              </div>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>현재 결제 정보</div>
            <div className='mt-[28px] ShadowBox_1'>
              <ul className='space-y-[16px] text-[#26262c] text-[14px] font-[400]'>
                {Data_2312211414.map((obj, idx) => {
                  const {제목, 내용} = obj;

                  return (
                    <Fragment key={idx}>
                      <li className='CenterLeft'>
                        <div className='w-[120px]'>{제목}</div>
                        <div className='ml-[20px] text-[16px] font-[600]'>{내용}</div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>결제 상세내역</div>
            <div className='mt-[28px] ShadowBox_1'>
              <div className='text-[#26262c] text-[16px] font-[600]'>해지 진행 안내</div>
              <div className='mt-[16px]'>
                <DescList_4/>
              </div>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <article className='CenterCenter gap-[10px]'>
              <div>
                <button className='Button_3 Xl w-[245px]'>돌아가기</button>
              </div>
              <div>
                <button className='Button_3 Xl w-[245px]'>정기구독 해지하기</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1/>
    </>
  );
}