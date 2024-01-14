'use client';
import { Fragment } from 'react';

export default function Cpnt_120105016_2({ className, children }) {
  return (
    <>
      <div className={`bg-[#F5EDEF] rounded-[16px] p-[24px]`}>
        <div className={`CenterLeft`}>
          <div
            className={`rounded-[4px] bg-[#F3436D] w-[20px] aspect-square`}
          ></div>
          <div
            className={`ml-[8px] text-[#26262C] text-[18px] font-[600] leading-[1em]`}
          >
            부정
          </div>
        </div>
        <ul className={`mt-[40px] space-y-[8px]`}>
          {[...Array(15).keys()].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <div
                    className={`p-[16px] bg-white rounded-[12px] text-[#3D3C42] text-[14px] font-[500] leading-[24px]`}
                  >
                    Lorem Ipsum is simply dummy text. {idx}
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
