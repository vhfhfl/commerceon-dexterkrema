'use client';
import Data_2312211415 from '@/dummy/Data_2312211415';
import {Fragment} from 'react';

export default function TabBar_2() {
  return (
    <>
      <div className='TabBar_2 flex flex-row items-center justify-center gap-[15px] max-w-[1232px] mx-auto'>
        {Data_2312211415.map((obj, idx) => {
          const {아이콘, 라벨} = obj;

          return (
            <Fragment key={idx}>
              <button className={`${idx == 1 && `On`} CenterCenter flex-1 box-border h-[60px] rounded-[12px] bg-[#F0EFF6] [&.On]:bg-[#E0DFEA] text-[#26262c] text-[16px] font-[600] leading-[16px]`}>
                <img className='w-[34px]' src={아이콘} alt=''/>
                <div className='ml-[2px]'>{라벨}</div>
              </button>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
