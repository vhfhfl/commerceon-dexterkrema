'use client';
import Cpnt_2401040849 from '@/components/common/Cpnt_2401040849';
import Cpnt_2401040850 from '@/components/common/Cpnt_2401040850';
import { Fragment } from 'react';

export default function Cpnt_2401040842() {
  return (
    <>
      <article className={`flex flex-col h-full`}>
        <div className={`Fc`}>
          <article className={`CenterBetween`}>
            <div className={`Fc`}>
              <article className={`CenterLeft gap-[4px]`}>
                {[...Array(3).keys()].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button
                        className={`${
                          idx == 0 ? 'On' : ''
                        } Button_6 w-[70px] Sm !rounded-[50px]`}
                      >
                        Button
                      </button>
                    </Fragment>
                  );
                })}
              </article>
            </div>
            <div className={`Fc`}>
              <button className={`Button_3 Sm w-[117px]`}>Button</button>
            </div>
          </article>
          <Cpnt_2401040849 className={`mt-[14px]`} />
        </div>
        <div className={`Fc flex-1 mt-[8px]`}>
          <Cpnt_2401040850 />
        </div>
      </article>
    </>
  );
}
