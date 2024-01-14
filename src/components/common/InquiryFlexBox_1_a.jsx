'use client';
import {Fragment} from 'react';
export default function InquiryFlexBox_1_a() {
  return (
    <>
      <div className='InquiryFlexBox_1'>
        <div className='Txt1'>조회된 조건 내</div>
        <div className='mt-[16px]'>
          <article className='CenterBetween gap-[2.5%]'>
            <div className='Item flex-1'>
              <div>충전 토큰</div>
              <div className='font-[400]'>
                <span className='Txt2 text-[#5d45ff]'>100</span>
                토큰
              </div>
            </div>
            <div className='Item flex-1'>
              <div>차감 토큰</div>
              <div className='font-[400]'>
                <span className='Txt2 text-[#26262c]'>36</span>
                토큰
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}