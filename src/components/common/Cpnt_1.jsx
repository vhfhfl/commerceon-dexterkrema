'use client';
import VolBox_1 from '@/components/common/VolBox_1';
import { Fragment } from 'react';

export default function Cpnt_1() {
  return (
    <>
      <div className={`WhiteBox CenterCenter gap-[10px]`}>
        {[...Array(4).keys()].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <VolBox_1 className={`flex-1`} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
