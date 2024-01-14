'use client';
import {Fragment} from 'react';

export default function Cpnt_3_a() {
  return (
    <>
      <div className='Cpnt_3'>
        <div>
          <div className='Montserrat text-[#26262c] text-[26px] font-[700] tracking-[-0.26px]'>Lorem ipsum</div>
          <article className='mt-[28px] flex items-start justify-between space-y-[12px]'>
            <div>
              <ul className='CenterLeft Montserrat text-[#26262c] text-[16px] font-[400]'>
                <li className='text-[#5d45ff] font-[600]'>Free</li>
                <li className='mx-[10px] w-[1px] h-[16px] bg-[#c6c5d0]'></li>
                <li>5일 무료사용</li>
              </ul>
              <ul className='CenterLeft Montserrat text-[#26262c] text-[16px] font-[400]'>
                <li className='text-[#5d45ff] font-[600]'>300,000원</li>
                <li className='mx-[10px] w-[1px] h-[16px] bg-[#c6c5d0]'></li>
                <li>월</li>
              </ul>
              <ul className='CenterLeft Montserrat text-[#26262c] text-[16px] font-[400]'>
                <li className='text-[#5d45ff] font-[600]'>
                  3,240,000원
                  <span
                    className='ml-[10px] text-[#a3a1b1] text-[14px] font-[400] line-through'>3,600,000원</span>
                </li>
                <li className='mx-[10px] w-[1px] h-[16px] bg-[#c6c5d0]'></li>
                <li>년</li>
              </ul>
            </div>
            <div>
              <button className='Button_4 w-[160px]'>구독하기</button>
            </div>
          </article>
          <ul className='mt-[20px] flex flex-wrap justify-start gap-[6px]'>
            {['연간 구독 시 20% 할인', '300토큰 지급'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <button className='Badge_3'>{obj}</button>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}