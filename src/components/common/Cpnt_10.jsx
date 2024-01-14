'use client';
import { Fragment } from 'react';

export default function Cpnt_10() {
  return (
    <>
      <div className={`space-y-[15px]`}>
        {[...Array(3).keys()].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <article className="CenterBetween pl-[12px] pr-[8px]">
                <div className={`Fc`}>
                  <div className={`text-left`}>
                    <div
                      className={`text-[#26262c] text-[14px] font-[400] leading-[14px]`}
                    >
                      키워드
                    </div>
                    <div
                      className={`mt-[4px] text-[#A3A1B1] text-[12px] font-[400] leading-[12px]`}
                    >
                      (422.000/ 1.7%)
                    </div>
                  </div>
                </div>
                <div className={`Fc`}>
                  <img src="/icon/2312201217.svg" alt="" />
                </div>
              </article>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
