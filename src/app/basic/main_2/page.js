'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import DescList_4 from '@/components/common/DescList_4';
import Swiper_7 from '@/components/swiper/Swiper_7';
import TermsBox_1 from '@/components/common/TermsBox_1';
import Cpnt_3_b from '@/components/common/Cpnt_3_b';
import Cpnt_4_a from '@/components/common/Cpnt_4_a';
import {Fragment} from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main className='pb-[145px]'>
        <section className='HBox mt-[100px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[38px] font-[700] leading-[48px] tracking-[-0.38px] text-center'>
              구독신청
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <article className='CenterCenter gap-[2.5%]'>
              <div className='flex-1'>
                <button className='Button_1 Lg w-full'>월간 이용권</button>
              </div>
              <div className='flex-1'>
                <button className='Button_3 Lg w-full'>연간 이용권</button>
              </div>
            </article>
          </div>
        </section>
        <section className='HBox mt-[20px]'>
          <div className='Inner2'>
            <div className='p-[40px] border-[1px] border-solid border-[#5d45ff] rounded-[24px]'>
              <Cpnt_3_b/>
              <div className='Divider_2'></div>
              <Cpnt_4_a/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='ShadowBox_1'>
              <article className='CenterBetween'>
                <ul className='space-y-[16px] text-[#26262c] text-[14px] font-[400]'>
                  <li className='CenterLeft'>
                    <div className='w-[80px]'>구독 상품명</div>
                    <div className='ml-[20px] text-[16px] font-[600]'>Enterprise</div>
                  </li>
                  <li className='CenterLeft'>
                    <div className='w-[80px]'>계약기간</div>
                    <div className='ml-[20px] text-[16px] font-[600]'>월간 구독</div>
                  </li>
                  <li className='CenterLeft'>
                    <div className='w-[80px]'>정기결제일</div>
                    <div className='ml-[20px] text-[16px] font-[600]'>첫 결제일 이후 매월 1일마다 자동 결제</div>
                  </li>
                </ul>
                <div>
                  <img src='/icon/2312121335_on.svg' alt=''/>
                </div>
              </article>
              <div className='Divider_2'></div>
              <DescList_4/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>결제 수단</div>
            <div className='mt-[28px] ShadowBox_1'>
              <Swiper_7/>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>결제 상세내역</div>
            <div className='mt-[28px] ShadowBox_1'>
              <ul className='space-y-[24px]'>
                <li className='CenterBetween text-[#26262c] text-[16px] font-[400]'>
                  <div>충전금액</div>
                  <div className='font-[600]'>10,000 원</div>
                </li>
                <li className='CenterBetween text-[#26262c] text-[16px] font-[400]'>
                  <div>부가세</div>
                  <div className='font-[600]'>1,000 원</div>
                </li>
              </ul>
              <div className='Divider_2'></div>
              <article className='CenterBetween'>
                <div className='text-[#26262c] text-[16px] font-[600]'>총 결제금액</div>
                <div className='text-[#5d45ff] text-[18px] font-[800]'>11,000 원</div>
              </article>
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <div className='text-[#26262c] text-[20px] font-[600]'>약관동의</div>
            <div className='mt-[28px] ShadowBox_1 py-[16px]'>
              <div className='CenterLeft'>
                <label className='FormLabelBox'>
                  <input className='Checkbox_1 Lg' type='checkbox'/>
                  <div className='LabalUi'>
                    <span className='mr-[4px] text-[#5D45FF]'>(필수)</span>
                    정기결제일에 맞춰 매월 정기 결제에 동의합니다.
                  </div>
                </label>
              </div>
            </div>
            <div className='mt-[20px] ShadowBox_1'>
              <TermsBox_1/>
              <div className='mt-[48px]'>
                <div className='text-[#26262c] text-[16px] font-[600]'>
                  결제 및 구독서비스 유의사항
                </div>
                <div className='mt-[24px]'>
                  <DescList_4/>
                </div>
              </div>
            </div>
            <div className='mt-[36px] text-[#26262c] text-[18px] font-[600] text-center'>
              위 내용을 확인하였으며, 결제 진행에 동의합니다.
            </div>
          </div>
        </section>
        <section className='HBox mt-[60px]'>
          <div className='Inner2'>
            <article className='CenterCenter'>
              <div>
                <button className='Button_1 Xl w-[245px]'>구독 결제하기</button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}