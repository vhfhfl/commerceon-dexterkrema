'use client';
import DescList_4 from '@/components/common/DescList_4';
import Cpnt_4_a from '@/components/common/Cpnt_4_a';
import Cpnt_3_b from '@/components/common/Cpnt_3_b';
import {Fragment} from 'react';

export default function Modal_2_a() {
  return (
    <>
      <div className='Modal_2'>
        <div className='Head'>
          <div>사용플랜 혜택보기</div>
        </div>
        <div className='Body'>
          <div className='ShadowBox_1'>
            <Cpnt_3_b/>
            <div className='Divider_2'></div>
            <Cpnt_4_a/>
          </div>
          <div className='mt-[20px] ShadowBox_1'>
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
        <div className='Foot'>
          <article className='CenterCenter gap-[10px]'>
            <div>
              <button className='Button_3 Xl w-[245px]'>닫기</button>
            </div>
            <div>
              <button className='Button_1 Xl w-[245px]'>플랜 변경하기</button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}