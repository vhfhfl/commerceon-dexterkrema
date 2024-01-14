'use client';
import DescList_5 from '@/components/common/DescList_5';
import {Fragment} from 'react';

export default function Cpnt_3_b() {
  return (
    <>
      <div className='Cpnt_3'>
        <div>
          <div className='Montserrat text-[#26262c] text-[26px] font-[700] tracking-[-0.26px]'>Lorem ipsum</div>
          <ul className='mt-[28px] CenterLeft gap-[10px] text-[#5d45ff] text-[16px] font-[400]'>
            <li className='Montserrat font-[600]'>300,000원</li>
            <li className='w-[1px] h-[16px] bg-[#c6c5d0]'></li>
            <li className='text-[#26262c]'>월</li>
            <li>(VAT 별도)</li>
          </ul>
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