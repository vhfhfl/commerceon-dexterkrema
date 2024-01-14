'use client';
import RadioGroup_1_b from '@/components/common/RadioGroup_1_b';
import { Fragment } from 'react';

export default function InquiryForm_4({ className }) {
  return (
    <>
      <div className={`${className} InquiryForm_4`}>
        <div className={`w-[400px]`}>
          <RadioGroup_1_b />
        </div>
        <article className="mt-[16px] CenterBetween">
          <div>
            <article className={`CenterLeft gap-[12px]`}>
              {[...Array(2).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <button className="Btn_1 Sm w-[180px]">
                        <div className="text-center">2024-01-01</div>
                        <img src="/icon/input_calendar.svg" alt="" />
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
          <div>
            <button className="Button_4 Sm w-[118px]">조회</button>
          </div>
        </article>
      </div>
    </>
  );
}
