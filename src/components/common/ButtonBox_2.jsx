'use client';
import { Fragment } from 'react';

export default function ButtonBox_2({ className }) {
  return (
    <>
      <div className={`${className} WhiteBox`}>
        <article className="CenterBetween">
          <div className={`Fc`}>
            <article className="CenterLeft">
              <div
                className={`text-[#26262C] text-[18px] font-[600] leading-[18px]`}
              >
                Lorem Ipsum
              </div>
              <div
                className={`ml-[12px] text-[#8C8A9A] text-[16px] font-[400] leading-[16px]`}
              >
                Lorem Ipsum
              </div>
            </article>
          </div>
          <div className={`Fc`}>
            <button className={`Button_4 Sm w-[118px]`}>Lorem Ipsum</button>
          </div>
        </article>
        <div className={`mt-[24px] CenterLeft gap-[14px]`}>
          {[...Array(3).keys()].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div
                  className={`w-[208px] border-solid border-[1px] border-[#E0DFEA] p-[12px] rounded-[12px]`}
                >
                  <div
                    className={`text-[#5D45FF] text-[16px] font-[500] leading-[16px]`}
                  >
                    3개
                  </div>
                  <div
                    className={`mt-[10px] text-[#26262c] text-[14px] font-[400] leading-[14px] truncate`}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </Fragment>
            );
          })}
          <div
            className={`CenterCenter w-[208px] h-[64px] border-solid border-[1px] border-[#E0DFEA] p-[12px] rounded-[12px]`}
          >
            <div
              className={`text-[#26262c] text-[14px] font-[400] leading-[14px] truncate`}
            >
              2023-11-01 ~ 2023-11-31
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
