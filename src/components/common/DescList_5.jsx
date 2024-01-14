'use client';
import {Fragment} from 'react';

export default function DescList_5() {
  return (
    <>
      <ul className='DescList_5'>
        {Array.from(Array(3)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li>
                <div className='Txt1'>
                  Lorem ipsum dolor sit amet.
                  <span className='Txt2'>(Lorem)</span>
                </div>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}