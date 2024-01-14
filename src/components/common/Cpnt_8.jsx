'use client';
import { Fragment } from 'react';

export default function Cpnt_8() {
  return (
    <>
      <article className={`CenterCenter gap-[28px]`}>
        {[...Array(2).keys()].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <div className={`flex-1`}>
                <div className={`text-[#26262C] text-[16px] font-[700]`}>
                  Lorem Ipsum is simply dummy text
                </div>
                <div className={`mt-[4px]`}>
                  <article className={`CenterCenter`}>
                    <select className={`SelectBox_2 Lg`} defaultValue={``}>
                      <option value={``} disabled={true} hidden={true}>
                        Lorem Ipsum is simply dummy text
                      </option>
                      <option value={`aaa`}>AAA</option>
                      <option value={`bbb`}>BBB</option>
                      <option value={`ccc`}>CCC</option>
                    </select>
                  </article>
                </div>
              </div>
            </Fragment>
          );
        })}
      </article>
    </>
  );
}
