'use client';
import {Fragment} from 'react';
import RadioGroup_1_a from '@/components/common/RadioGroup_1_a';

export default function InquiryForm_2() {
  return (
    <>
      <div className='InquiryForm_2'>
        <article className='flex items-start justify-between gap-[44px] py-[14px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#E0DFEA] rounded-[24px]'>
          <div className='flex-1 space-y-[16px]'>
            <article className='CenterLeft'>
              <div className='CenterCenter w-[160px] leading-[48px]'>조회기간</div>
              <div className='grow'>
                <RadioGroup_1_a/>
              </div>
            </article>
            <article className='CenterLeft'>
              <div className='CenterCenter w-[160px] leading-[48px]'>검색조건</div>
              <div className='grow'>
                <div className='CenterLeft gap-[60px]'>
                  {Array.from(Array(3)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <label className='FormLabelBox'>
                          <input className='RadioButton_1' type='radio'/>
                          <div className='LabalUi'>TEXT</div>
                        </label>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
          <div className='flex-1'>
            <article className='CenterRight gap-[12px]'>
              {
                ['2024-01-01', '2025-01-01'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <button className='Btn_1 w-[200px]'>
                          <div>{obj}</div>
                          <img src='/icon/input_calendar.svg' alt=''/>
                        </button>
                      </div>
                    </Fragment>
                  );
                })
              }
              <div>
                <button className='Button_1 w-[120px]'>조회</button>
              </div>
            </article>
          </div>
        </article>
      </div>
    </>
  );
}