'use client';
import { Fragment } from 'react';
import WhiteBoxTitle_1 from '@/components/common/WhiteBoxTitle_1';

export default function Cpnt_2() {
  return (
    <>
      <div className={`WhiteBox`}>
        <WhiteBoxTitle_1>Lorem Ipsum</WhiteBoxTitle_1>
        <div className={`mt-[24px] border-solid border-[1px] border-[#E0DFEA] rounded-[12px] text-[#3D3C42] text-[14px] font-[500] leading-[24px] overflow-hidden`}>
          <div className={`h-[176px] overflow-auto p-[16px]`}>
            {[...Array(10).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
