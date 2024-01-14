'use client';
import RadioGroup_1_b from '@/components/common/RadioGroup_1_b';
import { Fragment } from 'react';

export default function InquiryForm_3({ className }) {
  return (
    <>
      <div className={`${className} InquiryForm_3`}>
        <article className="p-[24px] space-y-[16px] bg-[#fff] rounded-[16px]">
          <div className="flex items-start justify-between gap-[50px]">
            <div className="flex-1">
              <RadioGroup_1_b />
            </div>
            <div>
              <article className="CenterRight gap-[8px]">
                {['2024-01-01', '2025-01-01'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <button className="Btn_1 Sm w-[180px]">
                          <div className="text-center">{obj}</div>
                          <img src="/icon/input_calendar.svg" alt="" />
                        </button>
                      </div>
                    </Fragment>
                  );
                })}
                <div>
                  <button className="Button_4 Sm w-[118px] ml-[20px]">
                    조회
                  </button>
                </div>
              </article>
            </div>
          </div>
          <div>
            <div className="TextInput_1 Sm w-full">
              <input placeholder="검색어를 입력하세요" />
              <button className="ResetBtn">
                <img src="/icon/input_delete.svg" alt="" />
              </button>
              <button className="Search">
                <img src="/icon/input_search.svg" alt="" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}