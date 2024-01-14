'use client';
import DescList_5 from '@/components/common/DescList_5';
import {Fragment} from 'react';

export default function Cpnt_4_b() {
  return (
    <>
      <div className='Cpnt_4'>
        <article className='grid grid-cols-2 items-start justify-between gap-[42px_26px]'>
          {
            Array.from(Array(4)).map((obj, idx) => {
              return (
              <Fragment key={idx}>
                <div>
                  <div className='text-[#26262c] text-[18px] font-[600]'>TITLE</div>
                  <div className='mt-[20px] text-[#26262c] text-[16px] font-[400]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                  <div className='mt-[20px]'>
                    <DescList_5/>
                  </div>
                </div>
              </Fragment>
              );
            })
          }
        </article>
      </div>
    </>
  );
}