'use client';
import { Fragment } from 'react';

export default function Cpnt_14({ className }) {
  return (
    <>
      <div
        className={`${className} border-solid border-[1px] border-[#E0DFEA] rounded-[12px] bg-white h-[176px] overflow-hidden`}
      >
        <div className={`p-[16px] h-full overflow-auto`}>
          <div
            className={`text-[#3D3C42] text-[14px] font-[500] leading-[24px]`}
          >
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
