'use client';
import { Fragment } from 'react';

export default function Cpnt_12() {
  return (
    <>
      <ul className="text-left DescList_4 text-[#8c8a9a] text-[14px] font-[400] leading-[24px]">
        {[...Array(3).keys()].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}
