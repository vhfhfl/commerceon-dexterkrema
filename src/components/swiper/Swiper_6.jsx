'use client';
import {Fragment} from 'react';

export default function Swiper_6() {
  return (
    <>
      <div className='Swiper_6'>
        <article className='CenterCenter gap-[1.28%]'>
          <div>
            <div className='Disabled NavBtn PrevBtn pointer-events-auto cursor-pointer [&.Disabled]:cursor-default'>
              <img className='[.NavBtn.Disabled>&]:hidden' src='/icon/swiper/prev_btn_2.svg' alt=''/>
              <img className='hidden [.NavBtn.Disabled>&]:block' src='/icon/swiper/prev_btn_2_disabled.svg' alt=''/>
            </div>
          </div>
          <a href='https://www.google.com' target='_blank'>
            <img src='/image/2312191751.jpg' alt=''/>
          </a>
          <div>
            <div className='NavBtn NextBtn pointer-events-auto cursor-pointer [&.Disabled]:cursor-default'>
              <img className='[.NavBtn.Disabled>&]:hidden' src='/icon/swiper/next_btn_2.svg' alt=''/>
              <img className='hidden [.NavBtn.Disabled>&]:block' src='/icon/swiper/next_btn_2_disabled.svg' alt=''/>
            </div>
          </div>
        </article>
        <div className='mt-[30px]'>
          <article className='CenterCenter gap-[10px]'>
            {
              Array.from(Array(3)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div
                      className={`${idx == 1 && `On`} w-[10px] aspect-square bg-[#CFCEDC] [&.On]:bg-[#5D45FF] [&.On]:outline [&.On]:outline-[#F0EFF6] cursor-pointer rounded-full`}></div>
                  </Fragment>
                );
              })
            }
          </article>
        </div>
      </div>
    </>
  );
}