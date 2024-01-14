'use client';
import {Fragment, useState} from 'react';

export default function TreeMenu_1_b() {
  const [active_idx, setActiveIdx] = useState(0);

  return (
    <>
      <div className='TreeMenu_1'>
        <ul>
          {Array.from(Array(5)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li className={`${active_idx == idx && `On`} group border-b-[1px] border-b-[#e0dfea]`}>
                  <div className='CenterLeft w-full py-[25px] text-[#5d45ff] text-[18px] font-[600] cursor-pointer' onClick={(e) => setActiveIdx(idx)}>
                    <div className='w-[48px] Montserrat'>{idx + 1}</div>
                    <div className='flex-1 text-[#303030]'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className='w-[24px] CenterCenter aspect-square duration-300 ease-out will-change-auto'>
                      <img className='group-[.On]:hidden' src='/icon/tree_down.svg' alt=''/>
                      <img className='hidden group-[.On]:block' src='/icon/tree_up.svg' alt=''/>
                    </div>
                  </div>
                  <div className={`${active_idx == idx && `On`} hidden [&.On]:block`}>
                    <ul>
                      <li
                        className={`CenterLeft p-[28px] border-t-[1px] border-t-[#e0dfea] bg-[#f0eff6] text-[#303030] text-[16px] font-[400] leading-[28px]`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam aspernatur aut autem
                        deleniti esse exercitationem harum libero magni nesciunt nobis omnis quibusdam rem repellat,
                        saepe sapiente sequi vel. Quod?
                      </li>
                    </ul>
                  </div>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}